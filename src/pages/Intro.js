import React from 'react';
import { useLocation } from 'react-router';
import Container from '../components/common/Container';
import Template from '../components/common/Template';
import './Intro.scss';

const introText = `인터브랜드(Interbrand)에서 매년 발표하는 세계 100대 브랜드 랭킹은 글로벌 브랜드를 대상으로 가치 평가를 실시하여 브랜드 가치가 높은 상위 100개 기업을 선정합니다.
이중에서 소프트웨어 관련 기업으로 애플, 구글, 그리고 마이크로소프트가 1위에서 3위를 차지하고 있습니다. 이처럼 소프트웨어 관련 기술은 세계 산업을 선도하고 있으며 미래를 획기적으로 변화시키고 있습니다. 본 사업단에서는 한림대학교가 SW중심대학의 롤 모델이 될 수 있도록 혁신적인 방향성을 가지고 사업을 진행하고자 합니다.
한림대학교는 이와 같은 시대 흐름에 발맞추어서 혁신적인 학사조직과 전문교육체계를 만들었습니다. 2018년 컴퓨터공학과, 융합소프트웨어학과 및 전자공학과를 통합하여 소프트웨어융합대학을 설립하였습니다. 그리고 4차산업 혁명을 선도하는 미래 인력 양성 및 지역 SW산업 수요에 맞추어 세 가지 핵심적인 분야로 빅데이터 전공, 콘텐츠IT전공 그리고 스마트IoT 전공을 신설했습니다.
문제해결 역량을 갖춘 실무형 SW 전문가 양성을 목표로 전공자 산학프로젝트 필수화 및 학부생-대학원생 도제식 교육 확대를 진행하며, 재단 산하 병원과 연계한 의료/헬스케어 빅데이터 분야에 대한 연구를 특성화하고 있습니다. 또한 본 사업단에서는 기숙사 기반 정주형 교육·생활 ·창업 커뮤니티 구축을 위하여 소프트웨어 빌리지 및 스타트업 빌리지를 운영함으로 365일, 24시간 학생들을 지원하는 정주대학 체제를 만들어가고 있습니다. SW분야를 전공하는 학생들이 정주대학 프로그램과 연계해서 2학년 1학기까지 코딩 실력을 완비할 수 있도록하며 기숙사 내의 SW영어교육 프로그램을 통하여 글로벌 능력을 배양할 수 있도록 다양한 프로그램을 제공합니다. 또한 3,4학년 학생들을 위해서 기업에서 필요로 하는 직무 교육 프로그램을 학기중/방학중에 단기직무교육과정을 통해서 제공함으로 실무역량을 완비할 수 있도록 합니다.
Multi-player형 창의융합 인재 양성을 위해서 복수전공 필수화에 의한 SW융합역량을 겸비할 수 있게 합니다. 비전공자학생들이 SW분야전문가와 협업할 수 있는 역량을 갖추기 위해서 SW융합/연계전공을 다수 운영합니다. 2018년에 5개의 전공이 운영되며 지속적으로 전공분야를 확대하고자 합니다. 또한 교수 겸직 확대를 통한 융합교육·연구 환경을 조성합니다. 그리고 모든 신입생은 SW필수교과목을 5학점 이수함으로 SW에 대한 탄탄한 기초 지식을 겸비하여 본인의 전공에서 SW적인 사고방식으로 문제해결을 할 수 있는 밑거름이 될 수 있게 교육을 제공합니다.
SW중심대학의 가치를 전파하기 위한 목적으로 SW가치확산센터를 설립하였으며, 소프트웨어 중심사회를 선도하는 Digital Citizen 육성을 목표로 다양한 사업을 진행합니다. 강원 지역 SW 가치 확산 프로그램(초중고, 성인, 취약/원격지 대상)을 운영하고, 지역 디지털리더 양성 및 디지털 문맹 퇴치 프로그램 그리고 지역 시민 SW 나눔 축제 및 지역 SW 커뮤니티 활성화 사업을 활발하게 운영합니다.`;

const Intro = () => {
  const { pathname } = useLocation();
  let path = pathname.substr(8);
  if (path.startsWith('/')) path = path.substr(1);
  if (path.endsWith('/')) path = path.substr(0, path.length - 1);

  return (
    <Template>
      <Container className="contentBox">
        <Container className="paper-intro">
          <div className="paper-wrap">

            <h1 className="intro-title">빌리지 소개</h1>
            <div className="intro-title-div" />

            <div className="intro-first-wrap">
              <div className="intro-text">
                <img src="./images/village_intro.jpg" alt="" />
                <div className="text-cont">
                  {introText.split('\n').map(line => (
                    <p key={line.split(0, 5)}>
                      {line}
                      <br />
                      <br />
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <h1 className="intro-title">빌리지 내부</h1>
            <div className="intro-title-div" />

            <div className="intro-inner-img">
              <img src="./images/village_inner_01_low.jpg" alt="" />
              <img src="./images/village_inner_02_low.jpg" alt="" />
              <img src="./images/village_inner_03_low.jpg" alt="" />
              <img src="./images/village_inner_04_low.jpg" alt="" />
              <img src="./images/village_inner_05_low.jpg" alt="" />
              <img src="./images/village_inner_06_low.jpg" alt="" />
              <img src="./images/village_inner_07_low.jpg" alt="" />
              <img src="./images/village_inner_08_low.jpg" alt="" />
              <img src="./images/village_inner_09_low.jpg" alt="" />
            </div>

            <h1 className="intro-title-02">빌리지 도면</h1>
            <div className="intro-title-div" />

            <div className="intro-drawing-img">
              <div className="intro-drawing-3d-img">
                <img src="./images/village_draw_01_low.jpg" alt="" />
                <img src="./images/village_draw_02_low.jpg" alt="" />
                <img src="./images/village_draw_03_low.jpg" alt="" />
              </div>
              <div className="intro-drawing-2d-img">
                <img src="./images/village_draw_04_low.jpg" alt="" />
                <img src="./images/village_draw_05_low.jpg" alt="" />
              </div>

            </div>

          </div>
        </Container>
      </Container>
    </Template>
  );
};

export default Intro;
