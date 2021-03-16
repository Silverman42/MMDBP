<label class="flex text-xs mb-1 items-center justify-between" for="{{$id}}">
    <p>{{$label}}</p>
    {{$slot}}
</label>
<input placeholder="{{$placeholder}}" aria-placeholder="{{$placeholder}}" class="appearance-none block w-full bg-primaryBg-400 border border-primaryBg-400 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-primaryBg-300 focus:border-primary-400 h-12" name="{{$name}}" type="{{$type}}" id="{{$id}}" value="{{old($name) ?? $value}}">
@error($errorName)
<p class="text-red-500 text-xs italic">{{$message}}</p>
@enderror