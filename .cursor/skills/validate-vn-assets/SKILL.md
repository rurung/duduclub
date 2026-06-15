---
name: validate-vn-assets
description: >-
  Validates arktis_game VN storyline links and event image matching. Use when the
  user says "스토리!" to check scene graph and dialogue flow, or "이벤트!" to check
  backgrounds/CG/portraits/gallery assets, or "배포가자!" to deploy with
  `npx vercel --prod`. Also use after editing src/data/scenario, gallery, or assets.
---

# VN 자산·시나리오 검증 (arktis_game)

## 트리거 키워드 (우선 적용)

사용자가 아래처럼 말하면 **즉시 이 스킬을 적용**하고, 해당 모드만 실행·보고한다.

| 사용자 입력 | 모드 | 실행 명령 |
|------------|------|-----------|
| **스토리!** | 스토리·대화 연결 | `pnpm run validate:story` |
| **이벤트!** | 이벤트·이미지 매칭 | `pnpm run validate:events` |
| **배포가자!** | Vercel 프로덕션 배포 | `npx vercel --prod` |
| (둘 다 / 전체 확인) | 전체 | `pnpm run validate:assets` |

### 스토리! — 에이전트가 할 일

1. `pnpm run validate:story` 실행 (직접 터미널에서)
2. 결과를 사용자에게 한국어로 요약
3. 오류 있으면 **어느 씬에서 끊겼는지** (`from → to`, 파일·줄)까지 보고
4. 수정 제안은 `src/data/scenario/` 기준으로

**검사 항목**

- 존재하지 않는 `nextSceneId` / `nextSceneIdWhenAffectionEqual`
- 진행 불가 씬 (다음·선택지·엔딩·autoAdvance·clickToContinue 없음)
- 중복 `scene id`
- `intro`에서 도달 불가 씬 (경고, 별도 루트 엔딩은 수동 확인)

**스크립트가 검사하지 않는 것:** 대사 품질, 호감도 밸런스, 연출 타이밍

### 이벤트! — 에이전트가 할 일

1. `pnpm run validate:events` 실행
2. 누락 배경/CG·캐릭터 초상·갤러리 불일치 목록 보고
3. `background` 키 ↔ 실제 파일 경로 수정안 제시

**검사 항목**

- 씬·갤러리 `background` → `src/assets/{backgrounds,cg,event}/` 파일 존재
- `character` + `characterExpression` → `characters.ts` 매핑 및 PNG 존재
- 미참조 이미지 (정보)

**스크립트가 검사하지 않는 것:** placeholder JPG, 페이드 ms, 갤러리 라벨 문구

### 배포가자! — 에이전트가 할 일

1. (선택) 큰 변경 직후면 `pnpm run validate:assets`로 검증 후 배포
2. 프로젝트 루트에서 `npx vercel --prod` 실행 (터미널, **network** 권한 필요)
3. 배포 URL·성공/실패를 사용자에게 한국어로 요약
4. 실패 시 빌드 로그 원인(`pnpm build` 실패, Vercel 인증 등) 보고

**배포 설정 (`vercel.json`)**

- `installCommand`: `pnpm install`
- `buildCommand`: `pnpm build`
- `outputDirectory`: `dist`

**주의**

- 사용자가 명시적으로 요청할 때만 배포한다 (`배포가자!` 등)
- Vercel 로그인/프로젝트 연결이 안 되어 있으면 CLI 안내에 따라 진행
- 배포 전 커밋·푸시는 사용자가 요청한 경우에만 수행

---

## 빠른 실행

```bash
pnpm run validate:story    # 스토리!
pnpm run validate:events   # 이벤트!
pnpm run validate:assets   # 전체
npx vercel --prod          # 배포가자!
```

통과: exit code `0` + 모드별 ✓ 메시지

---

## 배경 파일 규칙 (엔진과 동일)

`background: "morning_street"` → `src/utils/backgroundAssets.ts` 후보 규칙:

- `src/assets/backgrounds/`, `cg/`, `event/` 하위
- `morning_street.png`, `morning-street.png` 등 `-`/`_` 변형

---

## 시나리오/이벤트 추가 체크리스트

1. PNG를 올바른 폴더에 추가
2. `background` 키 = 파일명(확장자 제외)
3. 캐릭터 표정 → `characters.ts` 등록
4. 갤러리 CG → `gallery.ts` 동일 `background` 키
5. 필요 시 `CharacterStage.tsx` `backgroundLabels`
6. **스토리!** → `validate:story` / **이벤트!** → `validate:events`

---

## 커밋 전

```
시나리오 수정 → validate:story
이미지/CG 추가 → validate:events
큰 변경       → validate:assets
```

---

## 보고 형식

### 스토리! 결과

```markdown
## 스토리 검증
- validate:story: 통과 / 실패
- 끊긴 연결: (from → to, 파일:줄)
- 진행 불가 씬:
- 도달 불가 씬(경고):
```

### 이벤트! 결과

```markdown
## 이벤트 검증
- validate:events: 통과 / 실패
- 누락 배경/CG:
- 누락 초상:
- 갤러리 불일치:
```

### 배포가자! 결과

```markdown
## 배포
- 명령: npx vercel --prod
- 결과: 성공 / 실패
- 배포 URL:
- 오류(있을 때):
```

---

## 참고

- 스크립트: `scripts/validate-game-assets.mjs`
- 시나리오 병합: `src/data/scenario/index.ts`
