# sass-animate-once

An easy way to write one-time animation as blocks.

## The pros
- describe your animation inside contents
- animation name is optional
- ease for R/W

## Example
```scss
@import "scss/animate-once"; //import the mixin
div {
    @include animate-once(5s linear infinite) {
        from { background-color: red; }
    	to   { background-color: green; }
    }
}
```
will be compiled to:
```css
div {
	-webkit-animation: sao-u8a16c123 5s linear infinite;
	-moz-animation: sao-u8a16c123 5s linear infinite;
	animation: sao-u8a16c123 5s linear infinite;
}
@-webkit-keyframes sao-u8a16c123 {
	from { background-color: red; }
	to   { background-color: green; }
}
@-moz-keyframes sao-u8a16c123 {
	from { background-color: red; }
	to   { background-color: green; }
}
@keyframes sao-u8a16c123 {
	from { background-color: red; }
	to   { background-color: green; }
}
```

## Usage
```scss
//selector can be nested
#{$selectorName} {
    //paramters are same as CSS animation's porperty values
    //except that NO animation-name here (it will be auto generated)
    @include animate-once($duration $timingFunction $delay $iterationCount $direction $fillMode $play-state) {
        $keyframesContent; //the content you write in the keyframes
    }
}
```

## Installation
The suggested way is to copy the file sass/animate-once.scss to your project:

### npm
```sh
npm i sass-animate-once
```

## Testing
```sh
npm test
```
