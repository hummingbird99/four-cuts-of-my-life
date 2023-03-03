const title = document.querySelector(".title");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");

function sendYou() {
  title.innerText = `\"세상에서 가장 작고\n가장 뛰어난 비행능력을\n지닌 새를 소개합니다.\"`;

  p1.innerText = `세상에서 가장 작은 새, 벌새.\n벌새는 새 중에서 크기가 가장 작아요.\n\n다 자라도 몸 길이가 5cm 밖에 안되죠.\n나비 유충인 애벌레와 비슷한 길이입니다.\n그래서 둥지의 크기도 아주 작아요.`;

  p2.innerText = `벌새의 자랑거리는 바로 "멋진 날개"입니다.\n이 날개로 아주 빠르게 날 수도 있고,\n한 자리에서 가만히 떠 있을 수도 있어요.\n\n벌새의 날개는 1초에 90번 움직이기 때문에\n벌이 나는 소리와 비슷하다고 합니다.`;

  p3.innerText = `먹이는 꽃의 달콤한 꿀과 영양분이 많은\n곤충이에요. 작지만 빠른 벌새, 참 귀엽죠?😊❤️`;
}

export default sendYou;
