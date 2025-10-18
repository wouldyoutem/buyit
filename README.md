# 우주꿀템 (BuyIt)

> **Would you buy it?** 실사용 후기로 검증된 진짜 꿀템만 추천합니다!

[![배포 상태](https://img.shields.io/badge/deploy-success-brightgreen)](https://wouldyoutem.github.io/buyit/)
[![쿠팡 파트너스](https://img.shields.io/badge/Coupang-Partners-orange)](https://www.coupang.com)

## 🎯 프로젝트 목표

**모바일 CTR(클릭률) 최적화**를 통한 쿠팡 파트너스 수익 극대화
- 📱 모바일 First 디자인
- 🎬 유튜브 쇼츠 연동
- 💰 명확한 CTA 버튼
- ⚡ 빠른 로딩

## ✨ 주요 기능

### 유튜브 쇼츠 연동
- **쇼츠 버튼**: 제품 이미지에 바로 연결
- **자동 정렬**: 최신 상품 우선 표시
- **NEW 뱃지**: 7일 이내 추가 상품 표시

### 모바일 CTR 최적화
- **큰 터치 영역**: 44px+ (Apple HIG 기준)
- **터치 피드백**: active:scale 효과
- **간결한 정보**: 핵심만 표시
- **빠른 CTA 도달**: 스크롤 최소화

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS (Mobile First)
- **Build**: Vite
- **Deployment**: GitHub Pages + GitHub Actions

## 🚀 시작하기

```bash
# 저장소 클론
git clone https://github.com/wouldyoutem/buyit.git
cd buyit

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 상품 검증 (로컬)
npm run check-product
```

## 📝 상품 추가하기

`public/profiles/profiles.json` 수정:

```json
{
  "id": "7",
  "productName": "제품명",
  "category": "카테고리",
  "description": "간단한 설명",
  "image": "이미지URL",
  "coupangLink": "쿠팡 파트너스 링크",
  "youtubeShorts": "유튜브 쇼츠 링크",
  "features": ["특징1", "특징2", "특징3"],
  "highlight": "핵심 포인트 한 줄",
  "dateAdded": "2025-01-20"
}
```

**중요**: 가격, 평점, 리뷰수는 입력하지 마세요! (실시간 변동)

## 🤖 자동 검증 시스템

상품 추가 시 자동으로:
- ✅ 필수 필드 검증
- ✅ 유튜브 최적화 팁 생성
- ✅ 제목 3가지 제안
- ✅ 설명란 템플릿 생성
- ✅ 해시태그 추천

## 📱 모바일 최적화

- Above the Fold 최적화
- 큰 터치 영역 (44px+)
- 터치 피드백
- 간결한 레이아웃
- 빠른 CTA 도달

## 📊 운영 가이드

- **상품 추가**: [OPERATION_GUIDE.md](./OPERATION_GUIDE.md)
- **Claude 가이드**: [CLAUDE_GUIDE.md](./CLAUDE_GUIDE.md)

## 🌐 배포

**사이트**: https://wouldyoutem.github.io/buyit/

**유튜브**: https://www.youtube.com/@wouldyoutem

## ⚠️ 법적 고지

본 사이트는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.

## 📄 라이선스

MIT License

---

**🌟 Star를 눌러주시면 더 좋은 꿀템을 찾는데 힘이 됩니다!**
