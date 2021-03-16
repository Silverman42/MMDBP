<label class="text-xs mb-1 flex justify-between" for="{{$id}}">
    <p>{{$label}}</p>
    <div class="inline-block w-auto">
        
    </div>
</label>
<div class="flex mb-1 bg-primaryBg-400 border border-primaryBg-400 text-black h-12 overflow-hidden rounded leading-tight focus:bg-primaryBg-300 focus:border-primary-300" tabindex="-1">
    <select
        class="block appearance-none bg-primaryBg-400 pl-3 flex-grow focus:outline-none"
        id="{{$id}}"
        name="{{$name}}"
        data-selected="{{$selected}}"

        {{-- disabled="disabled == true || loading == true" --}}
        >
        {{$slot}}
    </select>
    <div class="pointer-events-none inset-y-0 right-0 flex items-center px-1 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
    </div>
</div>
@error($errorName)
<p class="text-red-500 text-xs italic">{{$message}}</p>
@enderror