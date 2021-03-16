@extends('layouts.landing')
@section('content')
    <!--breadcumb start here-->
<div class="xs-banner inner-banner contet-to-center" style="background-image: url('assets/images/innerWelcome/inner-welcome-banner.jpg');">
	<div class="container">
		<div class="row">
			<div class="col-lg-7 align-self-center">
				<div class="xs-banner-content">
                    <h1 class="banner-sub-title wow fadeInLeft">Account Types</h1>
					<h2 class="banner-title wow fadeInLeft" data-wow-duration="1.5s">OUR PRICING PLANS</h2>
					<ul class="breadcrumbs list-inline wow fadeInLeft" data-wow-duration="2s">
                        <li><a href="index-2.html">Home</a></li>
                        <li>Account Type</li>
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
                    <h2 class="heading-sub-title">Pricing Plans</h2>
                    <h3 class="heading-title">OUR <span>BEST PRICING</span></h3>
                </div><!-- .xs-heading END -->
            </div> 
        </div><!-- .row END -->
        <div class="row">
            <div class="col-md-12 xs-pricing-group">
                <ul class="nav nav-tabs main-nav-tab tab-swipe wow fadeIn" role="tablist">
                    <li>
                        <a id="monthly-tab" class="active show" data-toggle="tab" href="#monthly" role="tab" aria-controls="monthly" aria-selected="true">Tier 1</a>
                    </li>
                    <li>
                        <a id="yearly-tab" data-toggle="tab" href="#yearly" role="tab" aria-controls="yearly" aria-selected="false">Tier 2</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fadeIn animated show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="xs-single-pricing">
                                    <div class="pricing-header">
                                        <div class="pricing-img-block">
                                            <img src="assets/images/pricing/pricing.svg" alt="hostinza pricing image">
                                        </div>
                                        <h4 class="xs-title">Starter Plan</h4>
                                    </div><!-- .pricing-header END -->
                                    <div class="pricing-body">
                                        <p>This plan comes with 10% referral bonus only</p>
                                        <div class="pricing-price">
                                            <p>Starting at</p>
                                            <h2><sup>$</sup>500</h2>
                                            <h6 class="discount-price">No Deposit Bonus<del>$00.99</del></h6>
                                        </div>
                                    </div><!-- .pricing-body END -->
                                    <div class="pricing-footer">
                                        <a href="register.html" class="btn btn-primary">Start Now</a>
                                    </div><!-- .pricing-footer END -->
                                </div><!-- .xs-single-pricing END -->
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="xs-single-pricing active">
                                    <div class="pricing-header">
                                        <div class="pricing-img-block">
                                            <img src="assets/images/pricing/pricing.svg" alt="hostinza pricing image">
                                        </div>
                                        <h4 class="xs-title">Basic Plan</h4>
                                    </div><!-- .pricing-header END -->
                                    <div class="pricing-body">
                                        <p>The ideal solution for most users, 12.5% referral bonus</p>
                                        <div class="pricing-price">
                                            <p>Starting at</p>
                                            <h2><sup>$</sup>1,000</h2>
                                            <h6 class="discount-price">5% Deposit Bonus<del>$49.99</del></h6>
                                        </div>
                                    </div><!-- .pricing-body END -->
                                    <div class="pricing-footer">
                                        <a href="register.html" class="btn btn-primary">Start Now</a>
                                    </div><!-- .pricing-footer END -->
                                </div><!-- .xs-single-pricing END -->
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="xs-single-pricing">
                                    <div class="pricing-header">
                                        <div class="pricing-img-block">
                                            <img src="assets/images/pricing/pricing.svg" alt="hostinza pricing image">
                                        </div>
                                        <h4 class="xs-title">Pro Plan</h4>
                                    </div><!-- .pricing-header END -->
                                    <div class="pricing-body">
                                        <p>The more comfortable plan with 3 days free trade signals</p>
                                        <div class="pricing-price">
                                            <p>Starting at</p>
                                            <h2><sup>$</sup>2,000</h2>
                                            <h6 class="discount-price">7.5% Deposit Bonus<del>$149.99</del></h6>
                                        </div>
                                    </div><!-- .pricing-body END -->
                                    <div class="pricing-footer">
                                        <a href="register.html" class="btn btn-primary">Start Now</a>
                                    </div><!-- .pricing-footer END -->
                                </div><!-- .xs-single-pricing END -->
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fadeIn animated" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="xs-single-pricing">
                                    <div class="pricing-header">
                                        <div class="pricing-img-block">
                                            <img src="assets/images/pricing/pricing.svg" alt="hostinza pricing image">
                                        </div>
                                        <h4 class="xs-title">Premuim Plan</h4>
                                    </div><!-- .pricing-header END -->
                                    <div class="pricing-body">
                                        <p>The High class plan for people looking to win, with 7 days free signals and 10x risk free trade</p>
                                        <div class="pricing-price">
                                            <p>Starting at</p>
                                            <h2><sup>$</sup>5,000</h2>
                                            <h6 class="discount-price">10% Deposit Bonus<del>$500.00</del></h6>
                                        </div>
                                    </div><!-- .pricing-body END -->
                                    <div class="pricing-footer">
                                        <a href="register.html" class="btn btn-primary">Start Now</a>
                                    </div><!-- .pricing-footer END -->
                                </div><!-- .xs-single-pricing END -->
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="xs-single-pricing active">
                                    <div class="pricing-header">
                                        <div class="pricing-img-block">
                                            <img src="assets/images/pricing/pricing.svg" alt="hostinza pricing image">
                                        </div>
                                        <h4 class="xs-title">Executive Hosting</h4>
                                    </div><!-- .pricing-header END -->
                                    <div class="pricing-body">
                                        <p>The ideal solution for corporate and experienced traders, with 14 days free signals and 30x risk free trade</p>
                                        <div class="pricing-price">
                                            <p>Starting at</p>
                                            <h2><sup>$</sup>10,000</h2>
                                            <h6 class="discount-price">15% Deposit Bonus<del>$1500.00</del></h6>
                                        </div>
                                    </div><!-- .pricing-body END -->
                                    <div class="pricing-footer">
                                        <a href="register.html" class="btn btn-primary">Start Now</a>
                                    </div><!-- .pricing-footer END -->
                                </div><!-- .xs-single-pricing END -->
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="xs-single-pricing">
                                    <div class="pricing-header">
                                        <div class="pricing-img-block">
                                            <img src="assets/images/pricing/pricing.svg" alt="hostinza pricing image">
                                        </div>
                                        <h4 class="xs-title">Platinium</h4>
                                    </div><!-- .pricing-header END -->
                                    <div class="pricing-body">
                                        <p>This brings everything to the table, 30 days free signal and 100x risk free trade</p>
                                        <div class="pricing-price">
                                            <p>Starting at</p>
                                            <h2><sup>$</sup>20,000</h2>
                                            <h6 class="discount-price">20% Deposit Bonus<del>$4000.00</del></h6>
                                        </div>
                                    </div><!-- .pricing-body END -->
                                    <div class="pricing-footer">
                                        <a href="register.html" class="btn btn-primary">Start Now</a>
                                    </div><!-- .pricing-footer END -->
                                </div><!-- .xs-single-pricing END -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- .row END -->
    </div><!-- .container END -->
</section><!-- END pricing section -->

@endsection