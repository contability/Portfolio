<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link type="text/css" rel="stylesheet" href="<c:url value='/resources/css/common.css' />" />
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script type="text/javascript" src="<c:url value='/resources/js/portfolio.js'/>"></script>

<div id="page_container">
	<div id="main_page">
		<main id="content_main">
			<aside id="left_side">
				<a id="a_menu" class="c_blueding_b cursor_p">menu</a>
			</aside>
			<article>
				<section id="frst_section" class="c_yelloding"></section>
				<section class="content_section">
					<div>
						<img alt="image01" class="introduce_imgs" src="<c:url value="/resources/images/image01.png"/>" id="image01">
						<span class="c_yelloding_sub" id="image02_sub"></span>
					</div>
				</section>
				<section class="content_section">
					<div>
						<img alt="image02" class="introduce_imgs" src="<c:url value="/resources/images/image02.jpg"/>" id="image02" style="z-index: 10">
					</div>
				</section>
				<section class="content_section">
					<div class="skill_imgs">
						<img alt="java" title="java" src="<c:url value="/resources/images/java_outline.png"/>">
						<img alt="javascript" title="javascript" src="<c:url value="/resources/images/javascript_outline.png"/>">
						<img alt="msSQL" title="msSQL" src="<c:url value="/resources/images/msSQL_outline.png"/>">
						<img alt="spring-framework" title="spring-framework" src="<c:url value="/resources/images/spring-framework_outline.png"/>">
						<img alt="jQuery" title="jQuery" src="<c:url value="/resources/images/jQuery_outline.png"/>">
						<img alt="postgreSQL" title="postgreSQL" src="<c:url value="/resources/images/postgreSQL_outline.png"/>">
						<%-- <img alt="jQueryUI" title="jQueryUI" src="<c:url value="/resources/images/jQueryUI_outline.png"/>"> --%>
					</div>
				</section>
				<section class="content_section">
					<div class="skill_imgs">
						<span>
							<img alt="java" title="java" src="<c:url value="/resources/images/java_emblem.png"/>">
							<progress class="progress-bar" value="35" min="0" max="100"></progress>
						</span>
						<span>
							<img alt="javascript" title="javascript" src="<c:url value="/resources/images/javascript_emblem.png"/>">
							<progress class="progress-bar" value="60" min="0" max="100"></progress>
						</span>
						<span>
							<img alt="msSQL" title="msSQL" src="<c:url value="/resources/images/msSQL_emblem.png"/>">
							<progress class="progress-bar" value="25" min="0" max="100"></progress>
						</span>
						<span>
							<img alt="spring-framework" title="spring-framework" src="<c:url value="/resources/images/spring-framework_emblem.png"/>">
							<progress class="progress-bar" value="30" min="0" max="100"></progress>
						</span>
						<span>
							<img alt="jQuery" title="jQuery" src="<c:url value="/resources/images/jQuery_emblem.png"/>">
							<progress class="progress-bar" value="60" min="0" max="100"></progress>
						</span>
						<span>
							<img alt="postgreSQL" title="postgreSQL" src="<c:url value="/resources/images/postgreSQL_emblem.png"/>">
							<progress class="progress-bar" value="55" min="0" max="100"></progress>
						</span>
						<%-- <img alt="jQueryUI" title="jQueryUI" src="<c:url value="/resources/images/jQueryUI_emblem.png"/>"> --%>
					</div>
				</section>
				<section class="content_section">
					<div class="project_imgs cursor_p">
						<a>
							<img class="project_img" class="orgFile_popup cursor_p" alt="project01" src="<c:url value="/resources/images/project01.jpg"/>">
						</a>
						<%-- <a>
							<img class="project_img" class="orgFile_popup cursor_p" alt="project02" src="<c:url value="/resources/images/project02.jpg"/>">
						</a> --%>
					</div>
					<div class="project_imgs cursor_p">
						<a>
							<img class="project_img" class="orgFile_popup cursor_p" alt="project02" src="<c:url value="/resources/images/project02.jpg"/>">
						</a>
					</div>
					<div class="project_imgs cursor_p">
						<a>
							<img class="project_img" class="orgFile_popup cursor_p" alt="project03" src="<c:url value="/resources/images/project03.jpg"/>">
						</a>
					</div>
					<div class="project_imgs cursor_p">
						<a>
							<img class="project_img" class="orgFile_popup cursor_p" alt="project04" src="<c:url value="/resources/images/project04.jpg"/>">
						</a>
					</div>
					<div class="project_imgs cursor_p">
						<a>
							<img class="project_img" class="orgFile_popup cursor_p" alt="project05" src="<c:url value="/resources/images/project05.jpg"/>">
						</a>
					</div>
				</section>
				<section class="content_section">
				</section>
			</article>
			<div class="content_text l_25per t_7per">
				<div class="c_blueding_xxxl">
					PORTFOLIO
				</div>
				<div class="c_blueding_b ls_45">
					JUNGSHINHYUNG
				</div>
			</div>
			<div class="content_text l_25per r_90">
				<div class="c_blueding_b">
					01. &lt;INTRODUCE/&gt;
				</div>
				<div class="c_blueding_s te_r">
					자기소개
				</div>
			</div>
			<div class="content_text l_15per">
				<div class="c_blueding_s">
					2년차 개발자로 GIS 프로젝트
				</div>
				<div class="c_blueding_s p_b_20">
					SI/SM 업무를 수행 해왔습니다.
				</div>
				<div class="c_blueding_s">
					요구사항 기술부터
				</div>
				<div class="c_blueding_s">
					설계, 구현, 테스트, 배포, 유지보수까지
				</div>
				<div class="c_blueding_s">
					전반적인 개발 업무를 진행 하였습니다.
				</div>
			</div>
			<div class="content_text l_25per r_90">
				<div class="c_blueding_b">
					REACT
				</div>
			</div>
			<div class="content_text l_25per r_90">
				<div class="c_blueding_b">
					02. &lt;SKILLS/&gt;
				</div>
				<div class="c_blueding_s te_r">
					보유기술
				</div>
			</div>
			<div class="content_text l_25per r_90">
				<div class="c_blueding_b">
					03. &lt;PROJECT/&gt;
				</div>
				<div class="c_blueding_s te_r">
					프로젝트
				</div>
			</div>
			<div class="content_text l_25per">
				<div class="c_blueding_s">
					- spring framework MVC 패턴으로 SW 개발
				</div>
				<div class="c_blueding_s">
					- easyUI 라이브러리를 활용한 UI 구현
				</div>
				<div class="c_blueding_s">
					- SOAP, REST API 등을 활용한 외부 연계
				</div>
				<div class="c_blueding_s p_b_20">
					- javaScript를 사용한 동적 컨텐츠 개발
				</div>
				<div class="c_blueding_s">
					해당 내용으로 GIS 공간정보 활용 관련 총 40여건의 SI/SM 웹 어플리케이션 프로젝트 수행
				</div>
			</div>
			<div class="content_text l_25per r_90">
				<div class="c_blueding_b">
					THX FOR WATCHING :)
				</div>
			</div>
			<div class="content_text l_25per r_90">
				<div class="c_blueding_b">
					04. &lt;FINISH/&gt;
				</div>
				<div class="c_blueding_s te_r">
					마무리
				</div>
			</div>
			<div class="content_text l_25per">
				<div class="c_blueding_s">
					얼마 전 SQLD 취득을 마치고 
				</div>
				<div class="c_blueding_s p_b_20">
					현재는 정보처리기사와 node.js, React.js 공부를 병행중인 초급 개발자입니다. 
				</div>
				<div class="c_blueding_b">
					저의 가장 큰 무기라고 생각하는 것은 꾸준함입니다.
				</div>
				<div class="c_blueding_s">
					끊임 없이 변화하는 개발 직군에서 가장 필요한 것 또한 꾸준함이라고 생각하며
				</div>
				<div class="c_blueding_s p_b_20">
					지금도, 그리고 앞으로도 저의 무기로 노력하여 제자리에 멈춰있지 않는 개발자가 되도록 노력하겠습니다.
				</div>
				<div class="c_blueding_b p_b_20">
					감사합니다.
				</div>
				<div class="c_blueding_b">
					<span id="github">
						<img alt="github" title="github" src="<c:url value="/resources/images/image_github.png"/>" class="link_img cursor_p">
					</span>
					<span id="kakao">
						<img alt="kakao" title="kakao" src="<c:url value="/resources/images/image_kakao.png"/>" class="link_img cursor_p">
					</span>
				</div>
			</div>
			<div class="content_text l_25per">
				<img alt="To The Top" src="<c:url value="/resources/images/upward_arrows.png"/>" id="top_arrows">
			</div>
		</main>
		<main id="menu_main" class="c_yelloding">
			<div>
				<ul>
					<li>
						<span id="a_close">
							<img alt="close" src="<c:url value="/resources/images/image_close.png"/>">
						</span>
					</li>
					<li>
						<span id="menu_01" scroll-value="1.8" class="menu_nav c_blueding_b">
							01. &lt;INTRODUCE/&gt;
						</span>
					</li>
					<li>
						<span id="menu_02" scroll-value="3.75" class="menu_nav c_blueding_b">
							02. &lt;SKILLS/&gt;
						</span>
					</li>
					<li>
						<span id="menu_03" scroll-value="4.73" class="menu_nav c_blueding_b">
							03. &lt;PROJECT/&gt;
						</span>
					</li>
					<li>
						<span id="menu_04" scroll-value="5.84" class="menu_nav c_blueding_b">
							04. &lt;FINISH/&gt;
						</span>
					</li>
				</ul>
			</div>
		</main>
	</div>
</div>