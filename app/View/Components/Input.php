<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Input extends Component
{
    public $id;
    public $label;
    public $errorName;
    public $type;
    public $name;
    public $value;
    public $placeholder;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(string $id='',string $label= '', string $errorName='',string $type='text',string $name = '', string $value = "", string $placeholder="" )
    {
        $this->id = $id;
        $this->label = $label;
        $this->errorName = $errorName;
        $this->type = $type;
        $this->name = $name;
        $this->value = $value;
        $this->placeholder = $placeholder;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.input');
    }
}
