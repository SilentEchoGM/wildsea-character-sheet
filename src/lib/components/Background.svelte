<script lang="ts">
  import { characterData } from "$lib/stores/characterData";
  import { pipe } from "fp-ts/function";
  import { array as A } from "fp-ts";
  import { eqBackgroundField } from "$data/character/backgroundProperties";
  import type { CharacterData } from "$types/data";

  const checkEmptyCustomFieldExists = A.exists(
    ({ label, text }) => label.length + text.length === 0
  );

  const removeDuplicates = A.uniq(eqBackgroundField);

  const cleanCustomFields = (characterData: CharacterData): CharacterData => {
    const unique = pipe(characterData.customBackgroundFields, removeDuplicates);

    const newData = checkEmptyCustomFieldExists(unique)
      ? {
          ...characterData,
          customBackgroundFields: [...unique],
        }
      : {
          ...characterData,
          customBackgroundFields: [
            ...unique,
            { label: "", order: unique.length, text: "" },
          ],
        };

    console.log("cleanCustomFields", {
      old: characterData.customBackgroundFields,
      new: newData.customBackgroundFields,
    });

    return newData;
  };

  $: $characterData = cleanCustomFields($characterData);
</script>

<div class="background-container">
  <h2>Background</h2>
  <div class="background-left-col">
    {#each $characterData.fixedBackgroundFields as field}
      <div class="background-entry" style:order={field.order}>
        <label class="background-prop" for="background-input-{field.label}"
          >{field.label}:</label>
        <input
          class="background-input"
          id="background-input-{field.label}"
          type="text"
          bind:value={field.text} />
      </div>
    {/each}
  </div>
  <div class="background-right-col">
    {#each $characterData.customBackgroundFields as field}
      <div class="background-entry" style:order={field.order}>
        <input
          class="background-input"
          bind:value={field.label}
          style:width="{Math.max(field.label.length, 5)}ch" />
        :
        <input
          class="background-input"
          id="background-input-{field.label}"
          type="text"
          bind:value={field.text} />
      </div>
    {/each}
  </div>
</div>

<style>
  .background-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    width: 30em;
  }
  h2 {
    grid-column: span 2;
  }
  .background-left-col,
  .background-right-col {
    width: 15em;
    row-gap: 0.3em;
    display: flex;
    flex-direction: column;
  }
  .background-entry {
    display: flex;
  }
  .background-container {
    text-transform: capitalize;
    font-variant: small-caps;
  }
  .background-input {
    border: none;
    border-bottom: solid 1px #000;
    flex-grow: 10;
    outline: none;
    text-transform: capitalize;
    font-variant: small-caps;
    font-family: serif;
  }
</style>
