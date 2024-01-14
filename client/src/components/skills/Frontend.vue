<template>
  <div class="frontend grid grid-cols-2 h-full">
    <div class="items flex flex-col justify-end h-full ">
      <div class="slider">
        <div class="slider__item p-0 leading-none relative pl-12 z-50 text-8xl font-bold">
          {{activeItem.name}}
        </div>
        <div class="slider__footer font-light text-color-gray opacity-60 text-2xl flex justify-end p-6">
          Applications
        </div>
      </div>
      <div class="nav px-12 py-10 flex w-full justify-between mt-8">
        <div class="numders flex items-center space-x-4 font-thin text-8xl">
          <div class="numder numder-active">{{showNumberItem(activeItem.id)}}</div>
          <span class="numders__line"></span>
          <div class="numder">{{showNumberItem(items.length)}}</div>
        </div>
        <div class="arrows flex items-center space-x-2">
          <svg @click="slide('prev')" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.998 12.9941L9 20.9981L17 29.0001M35 21.0001H9" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg @click="slide('next')" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.002 12.9941L33 20.9981L25 29.0001M7 21.0001H33" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="skills flex flex-col justify-between">
      <div class="scroll-design skills__list p-6 h-full overflow-hidden">
        <div class="skills-wrapper flex flex-wrap ">
          <div class="skill block font-regular text-2xl text-color-gray "
               v-for="skill in skills">
            {{skill}}
          </div>
        </div>
      </div>

      <div class="skills__footer font-light text-color-gray text-2xl p-6">
        General skills
      </div>
    </div>
  </div>
</template>

<script setup>
  import {onMounted, ref} from "vue";
  import showNumberItem from "@/mixins/showNumberInSliderMixin.js";

  const props = defineProps({
    items: Array,
    skills: Array
  })

  const activeItem = ref({
    id: null,
    name: null
  })

  const slide = (direction) => {
    let currentId;
    if (direction === 'next'){
      currentId = activeItem.value.id+1

      if(currentId <= props.items.length){
        activeItem.value = props.items.filter((item)=>{
          return item.id === currentId
        })[0]
      } else {
        activeItem.value = props.items.filter((item)=>{
          return item.id === 1
        })[0]
      }
    } else {
      currentId = activeItem.value.id-1

      if(currentId <= 0){
        activeItem.value = props.items.filter((item)=>{
          return item.id === props.items.length
        })[0]
      } else {
        activeItem.value = props.items.filter((item)=>{
          return item.id === currentId
        })[0]
      }
    }
  }

  onMounted(()=>{
    activeItem.value = props.items[0]

    $.fn.hScroll = function (amount) {
      amount = amount || 120;
      $(this).bind("DOMMouseScroll mousewheel", function (event) {

        let oEvent = event.originalEvent,
            direction = oEvent.detail ? oEvent.detail * -amount : oEvent?.wheelDelta,
            position = $(this).scrollLeft();
        position += direction > 0 ? -amount : amount;
        $(this).scrollLeft(position);
        event.preventDefault();
      })
    };

    $('.scroll-design').hScroll(15);
  })
</script>

<style scoped lang="scss">

</style>