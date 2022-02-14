Vue.component("header-el", {
  data : () => {
    return {
      menuList : ["ABOUT", "MOVIE", "ARTIST", "AUDITION", "COMMUNITY"]
    }
  },
  template : `
    <header id="header">
      <div class="inner">
        <div class="logo">
          <a href="./"><img src="./img/logo_fm.png" alt=""></a>
        </div>
        <nav class="menu">
          <ul>
            <li v-for="menu in menuList"><a href="#">{{menu}}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `
});


Vue.component("banner-el", {
  template : `
    <div id="banner">
      <div class="inner">
        <h2 class="bn_title">지금부터 당신의 영화가 시작됩니다</h2>
        <a href="#">오디션 참가</a>
      </div>
    </div>
  `
});


Vue.component("cont1-el", {
  data : () => {
    return {
      sec1Cont : ["죄 많은 소녀 (After My Death, 2019)", "소공녀 (Microhabitat, 2020)", "벌새 (House of Hummingbird, 2018)"]
    }
  },
  template : `
    <div id="section1">
      <div class="inner">
        <h2 class="title">Today's Movie</h2>
        <ul class="cont_wrap">
          <li class="content" v-for="contTitle in sec1Cont">
            <div class="img_part">
              <a href="#"><img src="./img/play_icon.png" alt=""></a>
            </div>
            <div class="txt_part">
              <h3>{{contTitle}}</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `
});


Vue.component("banner-mid-el", {
  template : `
    <div id="mid_banner">
      <div class="inner">
        <h2 class="mid_bn_title">Audition Schedule</h2>
        <p>실시간으로 업데이트 되는 오디션 정보를 확인하실 수 있습니다.<br>
          배우 또는 배우 지망생분들의 많은 참여 바랍니다.</p>
        <a href="#">오디션 정보 확인</a>
      </div>
    </div>
  `
});


Vue.component("cont2-el", {
  data : () => {
    return {
      sec2Cont : ["전여빈", "김새벽", "이상희", "김예은", "이학주", "박정민"]
    }
  },
  template : `
    <div id="section2">
      <div class="inner">
        <h2 class="title">Actors</h2>
        <ul class="cont_wrap">
          <li class="content" v-for="name in sec2Cont">
            <div class="txt_part">
              <span>{{name}}</span>
              <a href="#">필모그래프</a>
            </div>
          </li>
        </ul>
        <a class="more" href="#">더보기</a>
      </div>
    </div>
  `
});


Vue.component("review-el", {
  template : `
    <div id="review">
      <div class="dark"></div>
      <div class="inner">
        <h2 class="title">Audition Reviewes</h2>
        <p class="review_cont">1차 오디션 합격 후, 감독님과의 직접 오디션을 보는 소중한 기회를 얻게 되었습니다. 감독님께서 제시하신 키워드에 맞게 준비한 연기를 보여드렸습니다. 연기가 끝나고 감독님께서는 호흡, 발음, 발성, 집중력 등 다각도에서 꼼꼼한 평을 해주셨습니다. 연기뿐만 아니라 프로필 사진에 대해서도 조언을 해주셨고, 제가 미처 생각하지 못했던 부분을 짚어주셔서 큰 도움을 받게 되었습니다.</p>
        <div class="review_prf">
          <img src="./img/review1.jpg" alt="">
        </div>
        <span class="review_name">김주영</span>
        <ul class="navigator">
          <li class="active"><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
    </div>
  `
});


Vue.component("footer-el", {
  template : `
    <div id="footer">
      <div class="inner">
        <div class="foot_menu">
          <ul>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보 취급방침</a></li>
            <li><a href="#">고객 상담실</a></li>
          </ul>
        </div>
        <div class="foot_bt">
        <div class="cpn_address">
          <p class="cpn_info">
            Filmmakers | 대표 : 임지애 | 사업자등록번호 : 113-28-507
            </p>
          <address>
            주소 : 서울특별시 강남구 논현로 | 개인정보관리책임자 : 한상용
          </address>
          <div class="copy">
            &copy; 1999 - 2021 Filmmakers
          </div>
        </div>
        <div class="cpn_contact">
          <p>고객센터(이용 및 결제 문의) 제휴 및 대외 협력, 광고 문의<br>
            대표전화 : 02-1234-5678 | 카카오톡 플러스친구 : 필름메이커스<br>
            이메일 : info@filmmakers.com</p>
        </div>
      </div>
    </div>
  `
});



new Vue({
  el : "#app",
})
