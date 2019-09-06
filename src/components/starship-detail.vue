<template>
  <div class="detail">
    <table>
      <tbody>
        <tr>
          <td>
            <strong>Name</strong>
          </td>
          <td></td>
          <td>{{detail.name}}</td>
        </tr>
        <tr>
          <td>
            <strong>Manufacturer</strong>
          </td>
          <td></td>
          <td>{{detail.manufacturer}}</td>
        </tr>
        <tr>
          <td>
            <strong>Cost</strong>
          </td>
          <td></td>
          <td>{{detail.cost_in_credits}}</td>
        </tr>
        <tr>
          <td>
            <strong>Length</strong>
          </td>
          <td></td>
          <td>{{detail.length}}</td>
        </tr>
        <tr>
          <td>
            <strong>Max Atmosphering Speed</strong>
          </td>
          <td></td>
          <td>{{detail.max_atmosphering_speed}}</td>
        </tr>
        <tr>
          <td>
            <strong>Crew</strong>
          </td>
          <td></td>
          <td>{{detail.crew}}</td>
        </tr>
        <tr>
          <td>
            <strong>Passangers</strong>
          </td>
          <td></td>
          <td>{{detail.passengers}}</td>
        </tr>
        <tr>
          <td>
            <strong>Consumables</strong>
          </td>
          <td></td>
          <td>{{detail.consumables}}</td>
        </tr>
        <tr>
          <td>
            <strong>Hyperdrive Rating</strong>
          </td>
          <td></td>
          <td>{{detail.hyperdrive_rating}}</td>
        </tr>
        <tr>
          <td>
            <strong>MGLT</strong>
          </td>
          <td></td>
          <td>{{detail.MGLT}}</td>
        </tr>
        <tr>
          <td>
            <strong>Starship Class</strong>
          </td>
          <td></td>
          <td>{{detail.starship_class}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["detail"]
};
</script>

<style scoped>
  .detail{
    font-size: 0.9em;
  }
</style>