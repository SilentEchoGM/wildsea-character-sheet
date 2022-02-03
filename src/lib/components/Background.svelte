<script lang="ts">
  import { characterData } from "$lib/stores/characterData";
</script>

{#each $characterData.background as field}
  <div class="background-strings" style:order={field.order}>
    <div class="background-prop">{field.label}</div>
    <input class="background-input" type="text" bind:value={field.text} />
  </div>
{/each}

<style>
  .background-strings {
    display: flex;
  }
  .background-input {
    border: none;
    text-decoration: underline;
  }
</style>
