@extends('layouts.landing')
@section('content')
    <!--breadcumb start here-->
<div class="xs-banner inner-banner contet-to-center" style="background-image: url('assets/images/innerWelcome/inner-welcome-banner.jpg');">
	<div class="container">
		<div class="row">
			<div class="col-lg-7 align-self-center">
				<div class="xs-banner-content">
                    <h1 class="banner-sub-title wow fadeInLeft">Contact us</h1>
					<h2 class="banner-title wow fadeInLeft" data-wow-duration="1.5s">GET IN TOUCH</h2>
					<ul class="breadcrumbs list-inline wow fadeInLeft" data-wow-duration="2s">
                        <li><a href="index-2.html">Home</a></li>
                        <li>Contact</li>
                    </ul>
                </div><!-- .xs-banner-content END -->
			</div>
		</div>
    </div>
    <div class="xs-overlay bg-gradient"></div>
</div>
<!--breadcumb end here--><!-- End banner section -->

<!-- contact info section -->
<section class="xs-section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mx-auto">
                <div class="xs-heading wow fadeIn">
                    <h2 class="heading-sub-title">Find us</h2>
                    <h3 class="heading-title">CONTACT <span>WITH US</span></h3>
                </div><!-- .xs-heading END -->
            </div>
        </div><!-- .row END -->
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="contact-info-group wow fadeInUp">
                    <div class="contact-info-icon">
                        <img src="assets/images/contact-info-icon-1.png" alt="contact info icon">
                    </div>
                    <h4 class="xs-title"><a href="#">Find us</a></h4>
                    <span style="text-transform: capitalize">HARBORSIDE 2
                        200 HUDSON STREET, SUITE 501
                        JERSEY CITY, NJ 07311</span>
                    <span>United States</span>
                </div><!-- .contact-info-group END -->
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="contact-info-group wow fadeInUp active" data-wow-duration="1.5s">
                    <div class="contact-info-icon">
                        <img src="assets/images/contact-info-icon-2.png" alt="contact info icon">
                    </div>
                    <h4 class="xs-title"><a href="#">Make a Call</a></h4>
                    <span>(551) 800-6527 </span>
                    <span>(551) 800-6527 </span>
                </div><!-- .contact-info-group END -->
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="contact-info-group wow fadeInUp" data-wow-duration="2s">
                    <div class="contact-info-icon">
                        <img src="assets/images/contact-info-icon-3.png" alt="contact info icon">
                    </div>
                    <h4 class="xs-title"><a href="#">Send Mail</a></h4>
                    <a href="mailto:support@etrader.site">support@etrader.site</a>
                    <a href="mailto:support@etrader.site">support@etrader.site</a>
                </div><!-- .contact-info-group END -->
            </div>
        </div><!-- .row END -->
    </div><!-- .container END -->
</section><!-- END contact info section -->

<!-- contact form section -->
<section class="xs-section-padding xs-bg-gray">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mx-auto">
                <div class="xs-heading wow fadeIn">
                    <h2 class="heading-sub-title">Have question?</h2>
                    <h3 class="heading-title">SEND <span>A MESSAGE</span></h3>
                </div><!-- .xs-heading END -->
            </div>
        </div><!-- .row END -->
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="xs-form-group wow fadeInUp">
                                                            <form action="#" method="POST" id="xs-contact-form" class="xs-form">
                        <div class="form-group">
                            <input type="text" class="form-control" name="name" placeholder="Name" id="xs_contact_name">
                            <input type="email" class="form-control" name="email" placeholder="Email" id="xs_contact_email">
                            <textarea name="message" placeholder="Question" id="x_contact_massage" class="form-control" cols="30" rows="10"></textarea>
                        </div>
                        <div class="xs-btn-wraper">
                            <input type="submit" class="btn btn-primary" id="xs_contact_submit" value="Submit Now">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div><!-- .container END -->
</section><!-- END contact form section -->
@endsection