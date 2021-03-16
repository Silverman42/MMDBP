@extends('layouts.landing')
@section('content')
    <!--breadcumb start here-->
<div class="xs-banner inner-banner contet-to-center" style="background-image: url('assets/images/innerWelcome/inner-welcome-banner.jpg');">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 align-self-center">
                <div class="xs-banner-content">
                    <h1 class="banner-sub-title wow fadeInLeft">Demo</h1>
                    <h2 class="banner-title wow fadeInLeft" data-wow-duration="1.5s">OUR DEMO TRADE</h2>
                    <ul class="breadcrumbs list-inline wow fadeInLeft" data-wow-duration="2s">
                        <li><a href="index-2.html">Home</a></li>
                        <li>Demo</li>
                    </ul>
                </div><!-- .xs-banner-content END -->
            </div>
        </div>
    </div>
    <div class="xs-overlay bg-gradient"></div>
</div>
<!--breadcumb end here--><!-- End banner section -->


<!-- pricing section -->
<section class="pricing-section xs-section-padding xs-bg-gray">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mx-auto">
                <div class="xs-heading wow fadeIn">
                    <h2 class="heading-sub-title">Demo</h2>
                    <h3 class="heading-title">HOW TO<span> TRADE</span></h3>
                </div><!-- .xs-heading END -->
            </div> 
        </div><!-- .row END -->
        <div class="row">

           
            <!-- service item -->
            <div class="col-md-4 wow fadeInLeft" data-wow-duration="500ms">
                <div class="service-item">
                    <div class="service-icon">
                    </div>

                    <div class="service-desc">
                        <h3></h3>
                        <p>Forex trading is relatively simple, predict the rise or fall of a commodity or currency and win.<br>
                            1. Select the asset to trade. <br>
                            2. Decide on the amount to invest. Make your prediction on the movement of the price of the asset. If you predict the price of the asset to rise, select Call (up). If your prediction is that the price will fall, select Put (Down).<br>
                            3. When the trading closes after the given time depending on your choosen option, you will win.</p>
                    </div>
                </div>
            </div>
            <!-- end service item -->

            <!-- service item -->
            <div class="col-md-8 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="500ms">
                <div class="db-group" align="center">

                    <div class="dbg-col-1" style="width:701px;">
                        <iframe src="widget-tiny26f51ff7.html?r=register.php" width="704px" frameBorder="0" height="338px"></iframe> 
                        <!--<iframe src="/widget-otc?lang=en&track=https://www.finpari.com/open-account" width="701" height="420" frameBorder="0"></iframe>-->
                        <!--<iframe src="https://trading.binarymate.com/app-trade/mini-platform/m-platform.html" width="701" height="420" frameBorder="0"></iframe>-->
                    </div>

                </div>
            </div>
            <!-- end service item -->

            <!-- service item -->
            <!-- end service item -->

        </div>
    </div>
</section>
<!-- END pricing section -->
@endsection