<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title>MMDBP</title>
    <meta name="theme-color" content="#fcd34d" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Source+Sans+Pro:wght@400;700&display=swap"
        rel="stylesheet">
    <style>
        .font-sans {
            font-family: 'Source Sans Pro', sans-serif;
        }

        .secondary-font {
            font-family: 'Montserrat', sans-serif;
        }

        .shadow-offset {
            position: relative;
        }

        .shadow-offset_black::before,
        .shadow-offset_yellow::before,
        .shadow-offset_bg-image::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: -100;
            top: 10px;
            left: -10px;
        }

        .shadow-offset_black::before {
            background: black;
        }

        .shadow-offset_yellow::before {
            background: #fcd34d;
        }

        .shadow-offset_bg-image::before {
            background: url();
        }

    </style>
</head>

<body class="relative font-sans">
    <div class="absolute w-64 h-64 bg-yellow-300 rounded-full opacity-60"
        style=" filter:blur(3.5rem); z-index:-50px; right:0;top:-20px"></div>
    <div class="absolute w-64 h-64 bg-green-300 rounded-full opacity-60"
        style=" filter:blur(3.5rem); z-index:-50px; left:0;top:-20px"></div>
    <div class="absolute w-40 h-40 bg-yellow-300 rounded-full"
        style=" filter:blur(3.5rem); z-index:-5px; right:0;bottom:20px"></div>
    <div class="absolute w-40 h-40 bg-green-300 rounded-full"
        style=" filter:blur(3.5rem); z-index:-5px; left:0;bottom:20px"></div>
    <header class="w-full px-5 z-0 relative">
        <div class="mx-auto max-w-7xl py-5 flex justify-between">
            <a href="#" class="inline-block w-14 h-3 ">
                <img src="./assets/img/app_logo_2.svg" alt="logo" class="w-full" />
            </a>
            <nav class="flex justify-end items-center">
                <a class="inline-block ml-4 text-black hover:text-yellow-500 font-medium" href="#">About</a>
                <a class="inline-block ml-4 text-black hover:text-yellow-500 font-medium" href="/login">Login</a>
                <a class="inline-block ml-4 py-3 px-4 bg-yellow-300 text-black hover:bg-yellow-500 font-medium"
                    href="/register">Register</a>
            </nav>
        </div>
    </header>
    <div class="max-w-7xl mx-auto px-5 lg:px-10">
        <section
            class="mt-16 px-5 md:px-0 py-10 shadow-offset shadow-offset_yellow flex flex-wrap justify-around items-center bg-black">
            <div class="w-full md:w-4/12 mb-10 md:mb-0">
                <h1 class="text-3xl md:text-6xl secondary-font text-white">Beauty, Hardwork and Virtue</h1>
                <p class="mt-10 text-gray-400">The Miss May Day Beauty Peagent is a celebration of elegance and
                    commitment to human development made possible by humanitarians from all works of life </p>
                <a href=""
                    class="inline-block uppercase tracking-widest py-4 px-7 text-md leading-3 text-sm bg-yellow-300 hover:bg-yellow-500 text-black mt-4">
                    Sign Up today
                </a>
            </div>
            <div class="w-full md:w-6/12">
                <img src="./assets/img/hero.jpg" class="w-full" alt="">
            </div>
        </section>
        <section class="mt-16 py-10 flex flex-wrap justify-between items-center">
            <div class="w-full md:w-5/12 mb-5 md:mb-0">
                <span class="inline-block tracking-widest text-xs">ABOUT MMDBP</span>
                <h1 class="text-3xl md:text-6xl secondary-font">Discovers and Empower Young Ladies</h1>
                <p class="mt-10 text-gray-500"><span class="text-black">The Miss May Day Beauty Peagent</span> is
                    designed to celebrate workers across the globe while providing a platform that discovers , encourage
                    and empower young ladies to empower others from different nations towards noble
                    attainments/achievements through diligence and hard work.</p>
            </div>
            <div class="w-full md:w-6/12 shadow-offset shadow-offset_yellow">
                <img src="./assets/img/about.jpg" class="w-full" alt="">
            </div>
        </section>
        <section class="mt-16 py-10 flex flex-wrap justify-between items-center">
            <div class="w-full md:w-6/12 mb-10 shadow-offset shadow-offset_yellow">
                <img src="./assets/img/events.jpg" class="w-full inline-block shadow-offset shadow-offset_yellow"
                    alt="events">
            </div>
            <div class="w-full md:w-5/12 mb-5 md:mb-0">
                <span class="inline-block tracking-widest text-xs">THE EVENT</span>
                <h2 class="text-3xl font-medium md:text-6xl secondary-font">A Two Part Memorable Event</h2>
                <p class="mt-10 text-gray-500">The MMDBP show is a two part event that consist of the beauty peagent
                    show and an award night. Both events occur on the <span class="text-gray-800">1st day of May every
                        year</span></p>
                <div class="mt-10 grid grid-cols-1 md:grid-cols-2 md:space-x-5">
                    <div class="mb-5 md:mb-0">
                        <span class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-yellow-200">
                            <img src="./assets/img/crown.svg" class="w-5 h-auto" alt="">
                        </span>
                        <h3 class="text-xl font-medium mb-3">The Beauty Peagent</h3>
                        <p class="text-gray-500">MMDI has been designed to be a 6day event. A compulsory 5 days camping
                            for contestants, in which they are made to engaged in numerous activities culminating on the
                            Grand finale which is on the 6th and final day of the event <span class="text-black">(1st of
                                May Annually)</span></p>
                    </div>
                    <div>
                        <span class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-yellow-200">
                            <img src="./assets/img/trophy.svg" class="w-5 h-auto" alt="">
                        </span>
                        <h3 class="text-xl font-medium mb-3">Labor Excellence Award</h3>
                        <p class="text-gray-500">Labor Excellence Award will be celebrated on the 1st of May annually,
                            being International workers’ day Celebration. It will be a single gathering where diligence
                            and hard work is celebrated in all sectors of the economy. </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-16 py-10">
            <div class="mb-10">
                <span class="inline-block tracking-widest text-xs uppercase">Registration</span>
                <h2 class="text-3xl font-medium md:text-6xl secondary-font">Become a Contestant with <br> these simple
                    steps </h2>
            </div>
            <div class=" grid grid-cols-1 md:grid-cols-4 md:space-x-3">
                <div class="mb-10">
                    <span
                        class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-black text-white">
                        1
                    </span>
                    <h3 class="text-xl font-medium mb-3">Register Account</h3>
                    <p class="text-gray-500">Fill in your full name, email and password in the registration page. <br>
                        Click <a class=" text-black hover:text-yellow-500" href="#">here</a> to begin registration</p>
                </div>
                <div class="mb-10">
                    <span
                        class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-black text-white">
                        2
                    </span>
                    <h3 class="text-xl font-medium mb-3">Verify your account</h3>
                    <p class="text-gray-500">After registration, a mail will be sent to your email. Click the link
                        contained in the mail to verify your account</p>
                </div>
                <div class="mb-10">
                    <span
                        class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-black text-white">
                        3
                    </span>
                    <h3 class="text-xl font-medium mb-3">Pay Registration Fee</h3>
                    <p class="text-gray-500">On your dashboard, enter your nationality and click on the 'make payment'
                        button</p>
                </div>
                <div class="mb-10">
                    <span
                        class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-black text-white">
                        4
                    </span>
                    <h3 class="text-xl font-medium mb-3">Complete Biodata</h3>
                    <p class="text-gray-500">After making payment, you will be permitted to complete your biodata. A
                        complete biodata qualifies you for the physical auditioning</p>
                </div>
            </div>
        </section>
        <section
            class=" mt-16 px-5 md:px-0 py-10 flex shadow-offset shadow-offset_black flex-wrap justify-around items-center bg-yellow-300">
            <div class="w-full md:w-4/12 mb-5 md:mb-0">
                <h2 class="text-3xl md:text-6xl secondary-font text-black">Join our Newsletter</h1>
            </div>
            <div class="w-full md:w-6/12">
                <form action="" method="post">
                    <div class="p-3 border flex justify-between items-stretch flex-wrap border-gray-900">
                        <input type="text"
                            class=" outline-none flex-grow mr-3 mb-5 bg-transparent text-black text-lg placeholder-black"
                            placeholder="You@mail.com">
                        <button type="button"
                            class="inline-block w-full md:w-auto uppercase tracking-widest py-4 px-7 text-md leading-3 text-sm bg-gray-800 hover:bg-black text-yellow-300">
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        </section>
        <footer class="mt-16 py-10 grid md:grid-cols-3 grid-cols-1 space-y-5 md:space-x-5 relative">
            <div class="mb-10 flex">
                <div class="w-10 h-10">
                    <img class="w-full" src="./assets/img/app_logo.svg" alt="logo">
                </div>
                <div class="ml-3">
                    <p>Miss May Day <br> Beauty Peagent</p>
                    <span class="text-xs text-gray-500">2020</span>
                </div>
            </div>
            <div class="mb-10">
                <h2 class="tracking-widest text-xs uppercase font-bold text-black">LEGAL</h2>
                <div class="flex flex-wrap mt-5">
                    <a href="" class="inline-block mr-5 mb-5 text-sm uppercase">Privacy Policy</a>
                    <a href="" class="inline-block mr-5 mb-5 text-sm uppercase">Terms and Condition</a>
                </div>
            </div>
            <div class="mb-10">
                <h2 class="tracking-widest text-xs uppercase font-bold text-black">SOCIAL</h2>
                <div class="flex flex-wrap mt-5">
                    <a href="" class="inline-block mr-5 mb-5 text-sm uppercase">Facebook</a>
                    <a href="" class="inline-block mr-5 mb-5 text-sm uppercase">Twitter</a>
                    <a href="" class="inline-block mr-5 mb-5 text-sm uppercase">Instagram</a>
                    <a href="" class="inline-block mr-5 mb-5 text-sm uppercase">Whatsapp</a>
                </div>
            </div>
        </footer>
    </div>
</body>

</html>
