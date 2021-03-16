@extends('layouts.landing')
@section('content')
    <!-- banner section -->
<!--breadcumb start here-->
<div class="xs-banner inner-banner contet-to-center" style="background-image: url('assets/images/innerWelcome/inner-welcome-banner.jpg');">
	<div class="container">
		<div class="row">
			<div class="col-lg-7 align-self-center">
				<div class="xs-banner-content">
                    <h1 class="banner-sub-title wow fadeInLeft">Common FAQ</h1>
					<h2 class="banner-title wow fadeInLeft" data-wow-duration="1.5s">GENERAL QUESTIONS</h2>
					<ul class="breadcrumbs list-inline wow fadeInLeft" data-wow-duration="2s">
                        <li><a href="index-2.html">Home</a></li>
                        <li>FAQ</li>
                    </ul>
                </div><!-- .xs-banner-content END -->
			</div>
		</div>
    </div>
    <div class="xs-overlay bg-gradient"></div>
</div>
<!--breadcumb end here--><!-- End banner section -->

<!-- faq section -->
<section class="xs-section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto">
                <div class="xs-heading wow fadeIn">
                    <h2 class="heading-sub-title">Common FAQs</h2>
                    <h3 class="heading-title">GENERAL <span>QUESTION</span></h3>
                </div><!-- .xs-heading END -->
            </div> 
        </div><!-- .row END -->        
        <div class="row">
            <div class="col-lg-6">
                <div id="accordion" class="xs-accordion" role="tablist">
                    <div class="card isActive">
                        <div class="card-header" role="tab" id="headingOne">
                            <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is Forex Trade?  <i class="icon icon-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <p>Forex Trade a simple and potentially very profitable way to make money from short term movements on the market. By correctly predicting whether the price of an asset will go up or down, you can get a significant income in a continuous way.
                                </p>
                            </div>
                        </div>
                    </div><!-- .card .isActive END -->
                    <div class="card">
                        <div class="card-header" role="tab" id="headingTwo">
                            <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What is cryptocurrency? <i class="icon icon-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                Cryptocurrency is a digital currency, which functioning is based on blockchain techology. Physically currency doesn't exist, it exist only in virtuality.
                                <br>
                                The most popular cryptocurrencies are Bitcoin, Ethereum, Litecoin, Dash, Ripple. You can use these currencies to fund and trade.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingThree">
                            <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What is the minimum and maximum deposit amount?  <i class="icon icon-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                The minimum deposit amount is 500$ (or €), and there is no maximum deposit
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingFour">
                            <a class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Do I have to download any software for trading?  <i class="icon icon-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                            <div class="card-body">
                                There is no need to download something before you can start trading with E Trade Securities LLC. All you need to do is sign up and add funds into your account and you’ll be ready to start trading.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingFive">
                            <a class="collapsed" data-toggle="collapse" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How can I sign up?  <i class="icon icon-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                            <div class="card-body">
                                To sign up go to ‘<a href="register.html">Register</a>’ and enter the required information.
                                Please make sure the data you submit is correct and up to date.
                                In the future it will simplify withdrawal process.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div id="accordion-two" class="xs-accordion" role="tablist">
                    <div class="card">
                        <div class="card-header" role="tab" id="headingSix">
                            <a data-toggle="collapse" class="collapsed" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                How can I fund my trading account?  <i class="icon icon-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapseSix" class="collapse" role="tabpanel" aria-labelledby="headingSix" data-parent="#accordion-two">
                            <div class="card-body">
                                <p>You can fund your account by credit cards (VISA/MasterCard), Western Union, Money Gram, Bank wire transfer, Bitcoin, Ethereum, Litecoin, Altcoins, Neteller, Skrill, Perfect Money.</p>
                            </div>
                        </div>
                    </div><!-- .card END -->
                    <div class="card">
                        <div class="card-header" role="tab" id="headingSeven">
                            <a class="collapsed" data-toggle="collapse" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                How quickly the funds will be added to my trading account?  <i class="icon icon-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapseSeven" class="collapse" role="tabpanel" aria-labelledby="headingSeven" data-parent="#accordion-two">
                            <div class="card-body">
                                The funds will be available for trading immediately, once we receive a confirmation from payment system.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingEight">
                            <a class="collapsed" data-toggle="collapse" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Does E Trade Securities LLC withhold a tax from payouts?  <i class="icon icon-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapseEight" class="collapse" role="tabpanel" aria-labelledby="headingEight" data-parent="#accordion-two">
                            <div class="card-body">
                                E Trade Securities LLC doesn't withhold any taxes. However, as a customer, it is your responsibility to follow the taxes requirements in your jurisdiction.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingNine">
                            <a class="collapsed" data-toggle="collapse" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                How quickly my withdrawal request is processed?  <i class="icon icon-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapseNine" class="collapse" role="tabpanel" aria-labelledby="headingNine" data-parent="#accordion-two">
                            <div class="card-body">
                                E Trade Securities LLC processes all withdrawal requests within 6 hours.
                                <br>
                                However verification may take longer time, if client didn't submit all requested documents in time.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingTen">
                            <a class="collapsed" data-toggle="collapse" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                How to trade forex?  <i class="icon icon-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapseTen" class="collapse" role="tabpanel" aria-labelledby="headingTen" data-parent="#accordion-two">
                            <div class="card-body">
                                To trade forex, simply fund your account and login into the platform. You will see forex trading by default.
                                <br>
                                To start trading, choose CALL or PUT options depending on your forecast.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- .row END -->
    </div><!-- .container END -->
</section><!-- END faq section -->
@endsection