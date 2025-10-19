import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 색상 코드
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// profiles.json 읽기
const profilesPath = path.join(process.cwd(), 'public/profiles/profiles.json');
const guidePath = path.join(process.cwd(), 'OPERATION_GUIDE.md');

let profiles;
try {
  profiles = JSON.parse(fs.readFileSync(profilesPath, 'utf8'));
} catch (error) {
  log('red', '❌ profiles.json 파일을 읽을 수 없습니다.');
  process.exit(1);
}

// 운영 가이드 읽기
let guide;
try {
  guide = fs.readFileSync(guidePath, 'utf8');
} catch (error) {
  log('red', '❌ OPERATION_GUIDE.md 파일을 읽을 수 없습니다.');
  process.exit(1);
}

log('cyan', '\n═══════════════════════════════════════════════════');
log('cyan', '📋 우주꿀템 상품 업데이트 검증 시작');
log('cyan', '═══════════════════════════════════════════════════\n');

// 최신 상품 찾기 (dateAdded 기준)
const sortedProducts = profiles.products.sort((a, b) => {
  return new Date(b.dateAdded || 0).getTime() - new Date(a.dateAdded || 0).getTime();
});

const latestProduct = sortedProducts[0];

log('blue', `🆕 최신 상품: ${latestProduct.productName}`);
log('blue', `📅 추가일: ${latestProduct.dateAdded || '미지정'}\n`);

// 필수 필드 검증
const requiredFields = [
  'id',
  'productName',
  'category',
  'description',
  'image',
  'coupangLink',
  'features',
];

const optionalFields = [
  'youtubeShorts',
  'highlight',
  'dateAdded',
];

log('yellow', '📝 필수 필드 검증 중...\n');

let hasErrors = false;
let hasWarnings = false;

requiredFields.forEach(field => {
  if (!latestProduct[field]) {
    log('red', `  ❌ ${field}: 필수 필드 누락`);
    hasErrors = true;
  } else {
    log('green', `  ✅ ${field}: OK`);
  }
});

log('yellow', '\n📋 선택 필드 확인...\n');

optionalFields.forEach(field => {
  if (!latestProduct[field]) {
    log('yellow', `  ⚠️  ${field}: 누락 (선택사항)`);
    hasWarnings = true;
  } else {
    log('green', `  ✅ ${field}: OK`);
  }
});

// OPERATION_GUIDE.md 준수 여부 확인
log('yellow', '\n📖 운영 가이드 준수 여부 확인...\n');

// 가격/평점/리뷰수 확인 (있으면 안됨)
const forbiddenFields = ['price', 'originalPrice', 'discount', 'rating', 'reviewCount'];
let hasForbiddenFields = false;

forbiddenFields.forEach(field => {
  if (latestProduct[field]) {
    log('red', `  ❌ ${field}: 이 필드는 사용하지 않습니다 (실시간 변동)`);
    hasForbiddenFields = true;
  }
});

if (!hasForbiddenFields) {
  log('green', '  ✅ 실시간 변동 데이터 없음 (올바름)');
}

// features 길이 체크
if (latestProduct.features && latestProduct.features.length !== 3) {
  log('yellow', `  ⚠️  features: ${latestProduct.features.length}개 (권장: 3개)`);
  hasWarnings = true;
} else {
  log('green', '  ✅ features: 3개 (권장 개수)');
}

// highlight 체크
if (!latestProduct.highlight) {
  log('yellow', '  ⚠️  highlight: 핵심 포인트 한 줄 추가를 권장합니다');
  hasWarnings = true;
}

// youtubeShorts 체크
if (!latestProduct.youtubeShorts) {
  log('yellow', '  ⚠️  youtubeShorts: 유튜브 쇼츠 링크 추가를 권장합니다');
  hasWarnings = true;
}

// 유튜브 쇼츠 최적화 팁 생성
log('cyan', '\n═══════════════════════════════════════════════════');
log('cyan', '📹 유튜브 쇼츠 최적화 팁');
log('cyan', '═══════════════════════════════════════════════════\n');

log('blue', `🎬 제품: ${latestProduct.productName}`);
log('blue', `📂 카테고리: ${latestProduct.category}\n`);

// 제목 제안
log('yellow', '📝 추천 제목 (3가지):\n');
log('green', `  1. "이거 진짜 대박! ${latestProduct.productName} 솔직 후기"`);
log('green', `  2. "${latestProduct.productName} 할인 중! 지금이 기회"`);
log('green', `  3. "가성비 최강 ${latestProduct.productName} 리뷰"\n`);

// 설명란 템플릿
log('yellow', '📄 유튜브 설명란 템플릿:\n');
console.log(`
🛒 구매 링크: https://wouldyoutem.github.io/buyit/

${latestProduct.description}

✨ 주요 특징
${latestProduct.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}

📌 타임라인
0:00 인트로
0:15 개봉 & 외관
0:30 주요 기능 시연
0:45 실사용 후기
0:55 총평

💬 댓글로 궁금한 점 남겨주세요!

#꿀템 #가성비 #쿠팡추천 #${latestProduct.category.replace('/', '')} #${latestProduct.productName.split(' ')[0]}

※ 쿠팡 파트너스 활동으로 일정 수수료를 받습니다
`);

// 해시태그 제안
log('yellow', '🏷️  추천 해시태그:\n');
const productKeywords = latestProduct.productName.split(' ').slice(0, 3);
const hashtags = [
  '#꿀템',
  '#가성비',
  '#쿠팡추천',
  `#${latestProduct.category.replace('/', '')}`,
  ...productKeywords.map(k => `#${k}`),
  '#할인'
];
log('cyan', `  ${hashtags.join(' ')}\n`);

// 촬영 팁
log('yellow', '🎥 촬영 팁:\n');
log('cyan', `  • 세로 영상 (9:16 비율) 필수`);
log('cyan', `  • 60초 이내로 제작`);
log('cyan', `  • 첫 3초가 중요 (시선 끌기)`);
log('cyan', `  • ${latestProduct.highlight || '핵심 포인트'}를 강조`);
log('cyan', `  • 실제 사용 장면 포함`);
log('cyan', `  • 자막 추가 권장\n`);

// 업로드 최적 시간
log('yellow', '⏰ 업로드 최적 시간:\n');
log('cyan', `  • 평일: 저녁 7-9시`);
log('cyan', `  • 점심: 12-1시`);
log('cyan', `  • 주말: 오전 10시, 오후 3시\n`);

// 요약
log('cyan', '═══════════════════════════════════════════════════');
log('cyan', '📊 검증 결과 요약');
log('cyan', '═══════════════════════════════════════════════════\n');

if (hasErrors) {
  log('red', '❌ 필수 필드가 누락되었습니다. 위 내용을 확인하세요.');
  process.exit(1);
} else if (hasForbiddenFields) {
  log('red', '❌ 사용하지 말아야 할 필드가 포함되어 있습니다.');
  log('red', '   가격, 평점, 리뷰수는 제거하세요.\n');
  process.exit(1);
} else if (hasWarnings) {
  log('yellow', '⚠️  검증 통과! 하지만 개선 가능한 부분이 있습니다.');
  log('yellow', '   위의 경고 사항을 확인하세요.\n');
} else {
  log('green', '✅ 완벽합니다! 모든 검증 통과!\n');
}

log('cyan', '═══════════════════════════════════════════════════');
log('green', '🎉 검증 완료! 이제 유튜브 쇼츠를 만들어보세요!');
log('cyan', '═══════════════════════════════════════════════════\n');

process.exit(0);
