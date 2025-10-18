# WouldYouTem 프로필 웹사이트

React + TypeScript + Tailwind CSS로 제작된 팀 멤버 프로필 리스트 웹사이트입니다.

## 🚀 기능

- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 🔍 실시간 프로필 검색 기능
- 🎨 Tailwind CSS를 활용한 모던한 UI/UX
- ⚡ Vite를 통한 빠른 빌드와 개발 서버
- 🔄 GitHub Actions를 통한 자동 배포 (CI/CD)

## 📋 사전 요구사항

- Node.js 18 이상
- npm 또는 yarn

## 🛠️ 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/wouldyoutem/wouldyoutem.git
cd wouldyoutem
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하세요.

### 4. 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 📝 프로필 추가하기

`public/profiles/profiles.json` 파일에 새로운 프로필을 추가하세요:

```json
{
  "id": "고유ID",
  "name": "이름",
  "role": "직책",
  "bio": "소개",
  "avatar": "아바타 이미지 URL",
  "github": "GitHub URL (선택)",
  "website": "웹사이트 URL (선택)",
  "email": "이메일 (선택)",
  "skills": ["스킬1", "스킬2", "스킬3"]
}
```

## 🚀 배포

### GitHub Pages

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다.

**배포 URL:** https://wouldyoutem.github.io/wouldyoutem/

`main` 브랜치에 푸시하면 자동으로 배포됩니다.

## 🛠️ 기술 스택

- **프레임워크**: React 18
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **빌드 도구**: Vite
- **배포**: GitHub Pages + GitHub Actions

## 📄 라이선스

MIT License

## 🤝 기여하기

프로필 추가 및 버그 수정을 환영합니다!

1. 이 저장소를 Fork 하세요
2. Feature 브랜치를 생성하세요 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push 하세요 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성하세요
