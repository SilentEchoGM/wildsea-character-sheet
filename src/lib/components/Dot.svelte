<script lang="ts">
  export let filled = false;

  let size = 1.5;
  let fillPercent = 0.75;
</script>

<div class="dot-bg" style:width="{size}em" style:height="{size}em">
  {#if filled}
    <div
      class="dot-fill"
      style:width="{size * fillPercent}em"
      style:height="{size * fillPercent}em"
      style:left="{(size * (1 - fillPercent)) / 2}em"
      style:top="{(size * (1 - fillPercent)) / 2}em" />
  {/if}
</div>

<style>
  .dot-bg {
    position: relative;
    background-color: #000;
    border-radius: 100%;
  }
  .dot-fill {
    position: relative;
    background-color: #fff;
    border-radius: 100%;
    width: 0.8em;
    height: 0.8em;
    left: 0.1em;
    top: 0.1em;
  }
</style>
