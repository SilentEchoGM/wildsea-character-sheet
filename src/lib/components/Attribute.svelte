<script lang="ts">
  import Dot from "./Dot.svelte";
  import { array as A } from "fp-ts";
  import { pipe } from "fp-ts/function";

  export let max = 1,
    value = 0,
    label = "";

  let arr: boolean[];

  $: arr = pipe(
    A.replicate(max, false),
    A.mapWithIndex((i, _) => i < value)
  );
</script>

<div class="attribute-name">
  {label}
</div>
<div class="attribute-dot-rack">
  {#each arr as filled}
    <Dot {filled} />
  {/each}
</div>
