# 자유공간 전파 경로손실 계산기

원거리 자유공간 전파의 기하학적 확산에 따른 등방성 안테나 기준 경로손실 계산.

- ID: E147
- App: https://nanalab.kr/eng-free-space-path-loss/
- Repository: https://github.com/NaNaCompany/eng-free-space-path-loss
- Formula: L_FS = 20 log₁₀(4πdf/c)

## Model and data

자유공간의 시선 경로와 양쪽 안테나의 원거리장을 가정합니다. 이 도구는 d ≥ λ만 수치 확인하므로, 실제 안테나 크기에 따른 원거리장 거리 조건은 별도로 확인해야 합니다. 안테나 이득·급전선 손실·편파 부정합·지면 반사·회절·대기 흡수는 제외합니다. 경로손실은 송신기와 수신기 사이 전체 링크 손실과 다릅니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
