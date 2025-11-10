# HowMuch MVP – 주거비 비교 계산기

**도메인:** howmuch.moomoo.so  
**목표:** MVP 수준의 주거비 비교 계산기 구현 및 피드백 수집

## 🎯 프로젝트 개요

HowMuch는 보증금·월세·관리비·이자·교통비를 입력해 여러 주거 옵션(A/B/C)을 비교할 수 있는 웹 계산기입니다.

### 핵심 기능
- 보증금·월세·관리비·이자·교통비 입력 후 A/B/C 옵션 비교
- 피드백 폼 (익명 Notion 전송)
- 광고 삽입
- 정책 문구 (Privacy/Terms/Disclaimer)

### UI 톤
- moomoo 브랜드 기반의 심플·직관·모바일 우선

### 확장 계획
- `/travel` - 여행비 계산기
- `/subscription` - 구독비 합산 계산기
- `/choice` - "살까 빌릴까" 비교형 계산기
- `/living` - 생활비 통합 버전

## 📁 프로젝트 구조

```
/app
  layout.tsx         # 공통 레이아웃 (Header/Footer)
  page.tsx           # 메인 페이지 (주거비 계산기)
/components
  Footer.tsx         # 정책/광고/제작자 정보
  FeedbackBox.tsx    # 피드백 전송 UI
/app/api/feedback/route.ts  # 서버측 Notion API 연동
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```bash
# .env.local.example 참고
NOTION_TOKEN=your_notion_token
NOTION_FEEDBACK_DB=your_notion_database_id
```

자세한 내용은 `.env.local.example` 파일을 참고하세요.

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📄 주요 컴포넌트

### RentCalc (page.tsx)
- 3개 옵션(A/B/C) 입력 가능
- 공통값(보유현금, 대출이자율) 입력 필드 포함
- [비교하기] 버튼 클릭 시 → 결과 계산 및 스냅샷 렌더링

### FeedbackBox.tsx
- 상시 노출, 비교표 아래
- 메시지만 서버로 전송
- 입력 내용은 제작자에게 익명으로 전달됩니다.

### /api/feedback/route.ts
- Notion API 사용 (서버 전용)
- `NOTION_TOKEN`, `NOTION_FEEDBACK_DB` 환경변수 사용
- 저장 필드: 제목(title), 내용(rich_text), 생성일(date)

## 🧱 계산 로직

### 월 실지출 계산
```
월 합계 = 월세 + 관리비 + 주차비 + 교통비 + 월 이자
```

### 대출원금 계산
```
대출원금 = max(0, 보증금 - 보유현금)
```

### 월 이자 계산
```
월 이자 = 대출원금 × (연이율 / 100) / 12
```

### 기회비용 (고급 계산)
```
월 기회비용 = 자기자본 × (기회비용 연수익률 / 100) / 12
```

## 📊 배포 전 체크리스트

- [ ] 도메인 howmuch.moomoo.so 연결
- [ ] Vercel 환경변수 (NOTION_TOKEN, NOTION_FEEDBACK_DB) 설정
- [ ] AdSense 삽입 (footer/aside slot)
- [ ] 모바일 반응형 테스트
- [ ] 피드백 DB 데이터 확인
- [ ] Privacy/Terms/Disclaimer 페이지 확인

## 🔧 기술 스택

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## 📝 주요 UI 문구

- **타이틀:** "당신의 일상비용, 얼마나 들까?"
- **설명:** "보증금·월세·관리비·교통비·이자까지 입력해 월·총 주거비를 한눈에 비교하세요."
- **CTA 버튼:** "[비교하기]"
- **결과 표 타이틀:** "옵션별 월·총 비용 비교"
- **피드백 안내:** "💬 계산기 사용 후, 불편했던 점이나 아이디어를 알려주세요."
- **푸터 문구:** "본 계산기는 참고용이며, 입력값은 서버에 저장되지 않습니다."

## 🎯 MVP 이후 확장 계획

1. **/travel** - 여행비 계산기 (인원·일수·비용 항목별 입력)
2. **/subscription** - 구독비 합산 계산기
3. **/choice** - "살까 빌릴까" 비교형 계산기
4. **/living** - 생활비 통합 버전

## 📧 문의

- 이메일: yoyo.in.moomoo@gmail.com
- Privacy: https://moomoo.so/privacy
- Terms: https://moomoo.so/terms
- Disclaimer: https://moomoo.so/disclaimer

## 📄 라이선스

© 2025 moomoo. All rights reserved.
