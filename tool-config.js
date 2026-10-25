export const tool={
  "id": "E147",
  "slug": "eng-free-space-path-loss",
  "title": "자유공간 전파 경로손실 계산기",
  "title_en": "Free-Space Path Loss Calculator",
  "category": "RF·전파",
  "category_en": "RF and propagation",
  "fields": [
    {
      "key": "f",
      "label": "반송파 주파수 f",
      "label_en": "Carrier frequency f",
      "dimension": "frequency",
      "example": 2400000000.0,
      "constraint": "positive",
      "display_unit": "Hz",
      "display_value": "2400000000"
    },
    {
      "key": "d",
      "label": "안테나 사이 거리 d",
      "label_en": "Distance between antennas d",
      "dimension": "length",
      "example": 1000,
      "constraint": "positive",
      "display_unit": "km",
      "display_value": "1"
    }
  ],
  "result_label": "자유공간 경로손실 L_FS",
  "result_label_en": "Free-space path loss L_FS",
  "result_dimension": "decibel",
  "formula": "L_FS = 20 log₁₀(4πdf/c)",
  "purpose": "원거리 자유공간 전파의 기하학적 확산에 따른 등방성 안테나 기준 경로손실 계산.",
  "purpose_en": "Calculate isotropic-reference path loss caused by geometric spreading in far-field free-space propagation.",
  "assumptions": "자유공간의 시선 경로와 양쪽 안테나의 원거리장을 가정합니다. 이 도구는 d ≥ λ만 수치 확인하므로, 실제 안테나 크기에 따른 원거리장 거리 조건은 별도로 확인해야 합니다. 안테나 이득·급전선 손실·편파 부정합·지면 반사·회절·대기 흡수는 제외합니다. 경로손실은 송신기와 수신기 사이 전체 링크 손실과 다릅니다.",
  "assumptions_en": "Required: an unobstructed free-space path and both antennas operating in each other’s far field. The tool checks only d ≥ λ; the far-field distance imposed by actual antenna dimensions requires a separate check. Excluded: antenna gains, feeder losses, polarization mismatch, ground reflection, diffraction and atmospheric absorption. This is the isotropic-reference spreading loss rather than the full link loss.",
  "sources": [
    {
      "label": "FCC — FCC 03-251, Appendix: Free Space Model",
      "url": "https://docs.fcc.gov/public/attachments/FCC-03-251A4.pdf"
    }
  ],
  "condition": "실제 안테나 크기에 따른 원거리장과 자유공간 시선 경로를 확인했습니다.",
  "condition_en": "I have checked far-field separation for the actual antenna sizes and an unobstructed free-space path.",
  "site": "https://nanalab.kr/eng-free-space-path-loss/",
  "repository": "https://github.com/NaNaCompany/eng-free-space-path-loss",
  "groups": [],
  "output_unit": "db"
};
