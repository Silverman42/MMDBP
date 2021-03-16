<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Select extends Component
{
    public $id;
    public $label;
    public $errorName;
    public $name;
    public $selected;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct( string $id='',string $label= '', string $errorName='',string $name = '', string $selected = "")
    {
        $this->id = $id;
        $this->label = $label;
        $this->errorName = $errorName;
        $this->name = $name;
        $this->selected = $selected;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.select');
    }
}
