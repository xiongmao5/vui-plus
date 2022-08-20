<template>
  <div class="v-input">
    <div class="v-input-box">
      <div class="v-input-slot" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="v-input-menu">
        <input
          v-if="type !== 'textarea'"
          :style="[computedPrefixIcon, computedDisabled, computedSuffixIcon]"
          :disabled=disabled
          class="v-input-box-input"
          :type=type
          :name=name
          :readonly=readonly
          :placeholder=placeholder
          :max=max
          :min=min
          :maxlength=maxlength
          :minlength=minlength
          :autofocus=autofocus
        />
        <button class="v-input-head" v-if="prefixIcon" :style="computedDisabled">
          <i :class=prefixIcon></i>
        </button>
        <button class="v-input-foot" v-if="suffixIcon" :style="computedDisabled">
          <i :class=suffixIcon></i>
        </button>
        <button class="v-input-eyes" v-if="type === 'password'" @click="handlePassword">
          <i class="el-icon-view"></i>
        </button>
        <button class="v-input-close" v-if="clearable" @click="handleClick">
          <i class="el-icon-close"></i>
        </button>
      </div>
      <div class="v-input-slot" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
      <textarea v-if="type === 'textarea'" name="" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: [String, Number],
    maxlength: Number,
    minlength: Number,
    placeholder: String,
    clearable: Boolean,
    showPassword: Boolean,
    disabled: Boolean,
    prefixIcon: String,
    suffixIcon: String,
    autocomplete: {
      type: String,
      default: 'off'
    },
    name: String,
    readonly: Boolean,
    max: Number,
    min: Number,
    autofocus: Boolean
  },
  data () {
    return {
      textType: ''
    }
  },
  computed: {
    computedPrefixIcon () {
      if (this.prefixIcon) {
        return {
          paddingLeft: '30px'
        }
      }
      return ''
    },
    computedSuffixIcon () {
      return {
        paddingRight: '30px'
      }
    },
    computedDisabled () {
      if (this.disabled) {
        return {
          opacity: '.5',
          cursor: 'not-allowed'
        }
      }
      return ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('update:modelValue', '')
    },
    handlePassword () {
      if (this.type === 'password') {
        this.$emit(this.type, 'text')
      }
    }
  }
}
</script>
