<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Button extends Component
{
    public $buttonType;
    public $textColor;
    public $bgColor;
    public $width;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(string $buttonType = 'submit', string $textColor = 'white', string $bgColor = 'primary', string $width = "w-full")
    {
        $this->buttonType = $buttonType;
        $this->textColor = $textColor;
        $this->bgColor = $bgColor;
        $this->width = $width;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.button');
    }
}
