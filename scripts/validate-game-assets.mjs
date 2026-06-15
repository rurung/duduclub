#!/usr/bin/env node
/**
 * 시나리오·갤러리에서 참조하는 배경/CG/캐릭터 일러스트가
 * src/assets 아래 실제 파일로 존재하는지 검사한다.
 *
 * backgroundAssets.ts 의 findBackgroundAsset 후보 규칙과 동일하게 매칭한다.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ASSETS = path.join(ROOT, "src/assets");
const SCENARIO_DIR = path.join(ROOT, "src/data/scenario");

const BACKGROUND_GLOBS = [
  "backgrounds",
  "cg",
  "event",
].map((dir) => path.join(ASSETS, dir));

const PORTRAIT_DIR = path.join(ASSETS, "characters");

const SCENARIO_FILES = [
  "day1.ts",
  "day2.ts",
  "day3.ts",
  "day4.ts",
  "day5.ts",
  "seoin.ts",
  "endings.ts",
];

const colors = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
};

function walkImages(dir, acc = []) {
  if (!fs.existsSync(dir)) {
    return acc;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkImages(full, acc);
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      acc.push(full);
    }
  }

  return acc;
}

function basenameCandidates(background) {
  return [
    `${background}.png`,
    `${background}.jpg`,
    `${background}.jpeg`,
    `${background.replace(/-/g, "_")}.png`,
    `${background.replace(/-/g, "_")}.jpg`,
    `${background.replace(/-/g, "_")}.jpeg`,
    `${background.replace(/_/g, "-")}.png`,
    `${background.replace(/_/g, "-")}.jpg`,
    `${background.replace(/_/g, "-")}.jpeg`,
  ];
}

function buildAssetIndex(files) {
  const byBasename = new Map();

  for (const file of files) {
    const base = path.basename(file).toLowerCase();
    if (!byBasename.has(base)) {
      byBasename.set(base, file);
    }
  }

  return byBasename;
}

function resolveBackground(background, assetIndex) {
  for (const candidate of basenameCandidates(background)) {
    const hit = assetIndex.get(candidate.toLowerCase());
    if (hit) {
      return hit;
    }
  }

  return undefined;
}

function rel(p) {
  return path.relative(ROOT, p).replaceAll("\\", "/");
}

function parseCharacters() {
  const content = fs.readFileSync(
    path.join(ROOT, "src/data/characters.ts"),
    "utf8",
  );
  const portraits = new Map();

  const blocks = content.split(/\n\s*\{/).slice(1);

  for (const block of blocks) {
    const idMatch = block.match(/id:\s*"([^"]+)"/);
    if (!idMatch) {
      continue;
    }

    const characterId = idMatch[1];
    const expressionRegex =
      /(\w+):\s*getPortraitUrl\("([^"]+)"\)/g;

    for (const match of block.matchAll(expressionRegex)) {
      const [, expression, fileName] = match;
      portraits.set(`${characterId}:${expression}`, fileName);
    }
  }

  return portraits;
}

function parseGalleryBackgrounds() {
  const content = fs.readFileSync(
    path.join(ROOT, "src/data/gallery.ts"),
    "utf8",
  );
  const backgrounds = [];

  for (const match of content.matchAll(
    /background:\s*"([^"]+)"/g,
  )) {
    backgrounds.push({
      background: match[1],
      source: "src/data/gallery.ts",
    });
  }

  return backgrounds;
}

function parseScenarioFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const scenes = [];
  const edges = [];

  let sceneKey = null;
  let sceneId = null;
  let background = null;
  let character = null;
  let characterExpression = null;
  let hasNextSceneId = false;
  let hasChoices = false;
  let hasConditionalNext = false;
  let hasEnding = false;
  let hasAutoAdvance = false;
  let hasClickToContinue = false;
  let sceneStartLine = 0;
  let lineNo = 0;

  const flush = () => {
    if (!background) {
      return;
    }

    const resolvedSceneId = sceneId ?? sceneKey;

    scenes.push({
      sceneKey,
      sceneId: resolvedSceneId,
      background,
      character,
      characterExpression,
      file: rel(filePath),
      line: sceneStartLine,
      hasExit:
        hasNextSceneId ||
        hasChoices ||
        hasConditionalNext ||
        hasEnding ||
        hasAutoAdvance ||
        hasClickToContinue,
    });
  };

  for (const line of lines) {
    lineNo += 1;

    const keyMatch = line.match(/^\s*"([\w-]+)":\s*\{/);
    if (keyMatch) {
      flush();
      sceneKey = keyMatch[1];
      sceneId = sceneKey;
      background = null;
      character = null;
      characterExpression = null;
      hasNextSceneId = false;
      hasChoices = false;
      hasConditionalNext = false;
      hasEnding = false;
      hasAutoAdvance = false;
      hasClickToContinue = false;
      sceneStartLine = lineNo;
    }

    const idMatch = line.match(/^\s*id:\s*"([^"]+)"/);
    if (idMatch) {
      sceneId = idMatch[1];
    }

    const bgMatch = line.match(/^\s*background:\s*"([^"]+)"/);
    if (bgMatch) {
      background = bgMatch[1];
    }

    const charMatch = line.match(/^\s*character:\s*"([^"]+)"/);
    if (charMatch) {
      character = charMatch[1];
    }

    const exprMatch = line.match(/^\s*characterExpression:\s*"([^"]+)"/);
    if (exprMatch) {
      characterExpression = exprMatch[1];
    }

    if (/^\s*choices:\s*\[/.test(line)) {
      hasChoices = true;
    }

    if (/^\s*conditionalNextSceneIds:\s*\[/.test(line)) {
      hasConditionalNext = true;
    }

    if (/^\s*ending:\s*true/.test(line)) {
      hasEnding = true;
    }

    if (/^\s*autoAdvanceMs:/.test(line)) {
      hasAutoAdvance = true;
    }

    if (/^\s*clickToContinue:\s*true/.test(line)) {
      hasClickToContinue = true;
    }

    const nextMatch = line.match(/^\s*nextSceneId:\s*"([^"]+)"/);
    if (nextMatch) {
      hasNextSceneId = true;
      edges.push({
        from: sceneId ?? sceneKey,
        to: nextMatch[1],
        file: rel(filePath),
        line: lineNo,
      });
    }

    const equalMatch = line.match(
      /^\s*nextSceneIdWhenAffectionEqual:\s*"([^"]+)"/,
    );
    if (equalMatch) {
      edges.push({
        from: sceneId ?? sceneKey,
        to: equalMatch[1],
        file: rel(filePath),
        line: lineNo,
        kind: "affection-equal",
      });
    }
  }

  flush();
  return { scenes, edges };
}

function findUnreachableScenes(allSceneIds, edges) {
  const referenced = new Set();
  const queue = ["intro"];

  if (!allSceneIds.has("intro")) {
    return [];
  }

  while (queue.length > 0) {
    const current = queue.shift();
    if (referenced.has(current)) {
      continue;
    }

    referenced.add(current);

    for (const edge of edges) {
      if (edge.from === current && !referenced.has(edge.to)) {
        queue.push(edge.to);
      }
    }
  }

  return [...allSceneIds].filter((id) => !referenced.has(id)).sort();
}

function getMode() {
  const args = process.argv.slice(2);

  if (args.includes("--story") || args.includes("--스토리")) {
    return "story";
  }

  if (args.includes("--events") || args.includes("--이벤트")) {
    return "events";
  }

  return "all";
}

function main() {
  const mode = getMode();
  const modeLabel =
    mode === "story"
      ? "스토리·대화 연결"
      : mode === "events"
        ? "이벤트·이미지 매칭"
        : "전체";

  const backgroundFiles = BACKGROUND_GLOBS.flatMap((dir) => walkImages(dir));
  const portraitFiles = walkImages(PORTRAIT_DIR);
  const backgroundIndex = buildAssetIndex(backgroundFiles);
  const portraitIndex = buildAssetIndex(portraitFiles);
  const portraitMap = parseCharacters();

  const allScenes = [];
  const allSceneIds = new Set();
  const allEdges = [];

  for (const file of SCENARIO_FILES) {
    const filePath = path.join(SCENARIO_DIR, file);
    if (!fs.existsSync(filePath)) {
      console.error(colors.red(`시나리오 파일 없음: ${rel(filePath)}`));
      process.exitCode = 1;
      continue;
    }

    const { scenes, edges } = parseScenarioFile(filePath);
    allScenes.push(...scenes);
    allEdges.push(...edges);

    for (const scene of scenes) {
      if (scene.sceneId) {
        allSceneIds.add(scene.sceneId);
      }
    }
  }

  const galleryRefs = parseGalleryBackgrounds();

  const missingBackgrounds = [];
  const missingPortraits = [];
  const usedBackgrounds = new Set();

  if (mode === "all" || mode === "events") {
    for (const scene of allScenes) {
      usedBackgrounds.add(scene.background);
      const resolved = resolveBackground(scene.background, backgroundIndex);

      if (!resolved) {
        missingBackgrounds.push({
          kind: "scene",
          sceneId: scene.sceneId,
          background: scene.background,
          file: scene.file,
          line: scene.line,
        });
      }

      if (scene.character && scene.characterExpression) {
        const key = `${scene.character}:${scene.characterExpression}`;
        const fileName = portraitMap.get(key);

        if (!fileName) {
          missingPortraits.push({
            kind: "mapping",
            sceneId: scene.sceneId,
            character: scene.character,
            expression: scene.characterExpression,
            file: scene.file,
            line: scene.line,
          });
          continue;
        }

        if (!portraitIndex.has(fileName.toLowerCase())) {
          missingPortraits.push({
            kind: "file",
            sceneId: scene.sceneId,
            character: scene.character,
            expression: scene.characterExpression,
            fileName,
            file: scene.file,
            line: scene.line,
          });
        }
      }
    }

    for (const ref of galleryRefs) {
      usedBackgrounds.add(ref.background);
      const resolved = resolveBackground(ref.background, backgroundIndex);
      if (!resolved) {
        missingBackgrounds.push({
          kind: "gallery",
          background: ref.background,
          file: ref.source,
        });
      }
    }
  }

  const brokenLinks = [];
  if (mode === "all" || mode === "story") {
    for (const edge of allEdges) {
      if (!allSceneIds.has(edge.to)) {
        brokenLinks.push(edge);
      }
    }
  }

  const deadEnds =
    mode === "all" || mode === "story"
      ? allScenes.filter((scene) => !scene.hasExit)
      : [];

  const duplicateIds = new Map();
  if (mode === "all" || mode === "story") {
    for (const scene of allScenes) {
      const count = duplicateIds.get(scene.sceneId) ?? 0;
      duplicateIds.set(scene.sceneId, count + 1);
    }
  }

  const duplicates = [...duplicateIds.entries()].filter(([, n]) => n > 1);

  const unreachable =
    mode === "all" || mode === "story"
      ? findUnreachableScenes(allSceneIds, allEdges)
      : [];

  console.log(colors.green(`=== arktis_game 검증 [${modeLabel}] ===\n`));
  console.log(
    `배경/CG/이벤트 파일: ${backgroundFiles.length}개 | 캐릭터 초상: ${portraitFiles.length}개 | 씬: ${allScenes.length}개`,
  );

  let hasError = false;

  if (missingBackgrounds.length > 0) {
    hasError = true;
    console.log(colors.red(`\n[오류] 누락된 배경/CG (${missingBackgrounds.length})`));
    for (const item of missingBackgrounds) {
      if (item.kind === "scene") {
        console.log(
          `  - ${item.sceneId} → "${item.background}" (${item.file}:${item.line})`,
        );
      } else {
        console.log(`  - 갤러리 → "${item.background}" (${item.file})`);
      }
    }
  }

  if (missingPortraits.length > 0) {
    hasError = true;
    console.log(colors.red(`\n[오류] 누락된 캐릭터 일러스트 (${missingPortraits.length})`));
    for (const item of missingPortraits) {
      if (item.kind === "mapping") {
        console.log(
          `  - ${item.sceneId}: ${item.character}.${item.expression} 매핑 없음 (${item.file}:${item.line})`,
        );
      } else {
        console.log(
          `  - ${item.sceneId}: ${item.fileName} 파일 없음 (${item.file}:${item.line})`,
        );
      }
    }
  }

  if (brokenLinks.length > 0) {
    hasError = true;
    console.log(colors.red(`\n[오류] 존재하지 않는 nextSceneId (${brokenLinks.length})`));
    for (const edge of brokenLinks) {
      console.log(
        `  - ${edge.from} → "${edge.to}" (${edge.file}:${edge.line})`,
      );
    }
  }

  if (deadEnds.length > 0) {
    hasError = true;
    console.log(colors.red(`\n[오류] 진행 불가 씬 — 출구 없음 (${deadEnds.length})`));
    for (const scene of deadEnds) {
      console.log(`  - ${scene.sceneId} (${scene.file}:${scene.line})`);
    }
  }

  if (duplicates.length > 0) {
    hasError = true;
    console.log(colors.yellow(`\n[경고] 중복 scene id (${duplicates.length})`));
    for (const [id, count] of duplicates) {
      console.log(`  - ${id} (${count}회)`);
    }
  }

  if (unreachable.length > 0) {
    console.log(
      colors.yellow(`\n[경고] intro에서 도달 불가 씬 (${unreachable.length})`),
    );
    for (const id of unreachable.slice(0, 20)) {
      console.log(`  - ${id}`);
    }
    if (unreachable.length > 20) {
      console.log(`  ... 외 ${unreachable.length - 20}개`);
    }
  }

  if (mode === "all" || mode === "events") {
    const unused = backgroundFiles.filter((file) => {
      const base = path.basename(file).replace(/\.(png|jpe?g)$/i, "");
      const normalized = base.toLowerCase();
      for (const used of usedBackgrounds) {
        if (
          basenameCandidates(used).some(
            (c) => c.replace(/\.(png|jpe?g)$/i, "").toLowerCase() === normalized,
          )
        ) {
          return false;
        }
      }
      return true;
    });

    if (unused.length > 0) {
      console.log(
        colors.dim(`\n[정보] 시나리오/갤러리에서 미참조 배경 (${unused.length})`),
      );
      for (const file of unused.slice(0, 15)) {
        console.log(colors.dim(`  - ${rel(file)}`));
      }
      if (unused.length > 15) {
        console.log(colors.dim(`  ... 외 ${unused.length - 15}개`));
      }
    }
  }

  const passMessages = {
    all: "✓ 모든 필수 자산과 씬 연결이 통과했습니다.",
    story: "✓ 스토리·대화 연결 검증을 통과했습니다.",
    events: "✓ 이벤트·이미지 매칭 검증을 통과했습니다.",
  };

  if (!hasError) {
    console.log(colors.green(`\n${passMessages[mode]}`));
    process.exit(0);
  }

  console.log(colors.red("\n✗ 검증 실패 — 위 항목을 수정한 뒤 다시 실행하세요."));
  process.exit(1);
}

main();
