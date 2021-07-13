<template>
  <div class="input-search">
    <img src="../assets/loupe.svg" alt="loupe svg" class="input-search-icon" />
    <input type="text" placeholder="Search places" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input-search {
  position: relative;
  height: 50px;
  input {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background: #f9fafc;
    font-weight: 500;
    padding: 15px;
    border-radius: 8px;
    padding-left: 50px;
    outline: none;
    border: 2px solid transparent;
    font-size: 16px;
    transition: all 0.3s ease;
    &:focus {
      border-color: #66a0fd;
    }
    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      color: #000;
      opacity: 0.7;
      font-size: 16px;
    }
  }
  &-icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    opacity: 0.7;
    width: 20px;
    height: 20px;
  }
}
</style>
