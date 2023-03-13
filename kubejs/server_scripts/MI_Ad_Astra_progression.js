// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	//Ad Astra! overhaul
	
	event.remove({id: 'modern_industrialization:materials/desh/smelting/dust_to_ingot_smelting'})
	event.remove({id: 'modern_industrialization:materials/desh/smelting/dust_to_ingot_blasting'})
	event.remove({id: 'modern_industrialization:materials/ostrum/smelting/dust_to_ingot_smelting'})
	event.remove({id: 'modern_industrialization:materials/ostrum/smelting/dust_to_ingot_blasting'})
	event.remove({id: 'modern_industrialization:materials/calorite/smelting/dust_to_ingot_smelting'})
	event.remove({id: 'modern_industrialization:materials/calorite/smelting/dust_to_ingot_blasting'})

	event.replaceInput({}, 'ad_astra:desh_ingot', '#c:desh_ingots')
	event.replaceInput({}, 'ad_astra:ostrum_ingot', '#c:ostrum_ingots')
	event.replaceInput({}, 'ad_astra:calorite_ingot', '#c:calorite_ingots')

	event.replaceInput({}, 'ad_astra:desh_block', '#c:desh_blocks')
	event.replaceInput({}, 'ad_astra:ostrum_block', '#c:ostrum_blocks')
	event.replaceInput({}, 'ad_astra:calorite_block', '#c:calorite_blocks')

	event.replaceInput({id: 'ad_astra:recipes/wheel'}, 'minecraft:black_dye', 'modern_industrialization:rubber_sheet')
	event.replaceInput({id: 'ad_astra:recipes/solar_panel'}, '#ad_astra_platform:steel_plates', 'modern_industrialization:silicon_wafer')
	event.replaceInput({mod: 'ad_astra'}, 'ad_astra:steel_ingot', '#c:steel_ingots')
	event.remove({id: 'ad_astra:conversion/fuel_from_oil'})
	event.remove({output: 'ad_astra:compressor'})
	event.remove({output: 'ae2:vibration_chamber'})
	event.remove({output: 'ad_astra:nasa_workbench'})
	event.remove({output: 'ad_astra:coal_generator'})
	event.remove({output: 'ad_astra:desh_ingot'})
	event.remove({output: 'ad_astra:ostrum_ingot'})
	event.remove({output: 'ad_astra:calorite_ingot'})
	event.remove({output: 'ad_astra:desh_plate'})
	event.remove({output: 'ad_astra:ostrum_plate'})
	event.remove({output: 'ad_astra:calorite_plate'})
	event.remove({output: 'ad_astra:steel_ingot'}),
	event.remove({output: 'ad_astra:steel_block'}),
	event.remove({output: 'ad_astra:steel_nugget'}),
	event.remove({output: 'ad_astra:steel_plate'}),
	event.remove({output: 'ad_astra:iron_plate'}),
	event.remove({output: 'ad_astra:iron_rod'}),
	event.remove({output: 'ad_astra:hammer'}),
	event.remove({output: 'ad_astra:steel_cable'}),
	event.remove({output: 'ad_astra:desh_cable'}),
	event.remove({output: 'ad_astra:desh_fluid_pipe'}),
	event.remove({output: 'ad_astra:ostrum_fluid_pipe'}),
	event.remove({output: 'ad_astra:hammer'}),

	//Ad Astra! changes for progression
		
	event.custom({
		"type": "ad_astra:fuel_conversion",
		"input": "ad_astra:oil",
		"output": "modern_industrialization:crude_oil",
		"conversion_ratio": 0.1
	}).id('p8:1')

	
	//Ad Astra! MI integration

	event.custom({
		"type": "ad_astra:fuel_conversion",
		"input": "modern_industrialization:boosted_diesel",
		"output": "ad_astra:fuel",
		"conversion_ratio": 0.5
	}).id('p8:6')

	event.custom({
		"type": "modern_industrialization:blast_furnace",
		"fluid_inputs": {
			"fluid": 'modern_industrialization:oxygen',
			"amount": 250
		},
		"item_outputs": {
		"item":"modern_industrialization:desh_hot_ingot",
		"amount": 1
		},
		"duration": 100,
		"eu": 32,
		"item_inputs": {
			"tag" : ("c:desh_dusts"),
			"amount": 1
		}
	}).id('p8:10')

	event.custom({
		"type": "modern_industrialization:blast_furnace",
		"fluid_inputs": {
			"fluid": 'modern_industrialization:sulfuric_acid',
			"amount": 250
		},
		"item_outputs": {
		"item":"modern_industrialization:ostrum_hot_ingot",
		"amount": 1
		},
		"duration": 100,
		"eu": 64,
		"item_inputs": {
			"tag" : ("c:ostrum_dusts"),
			"amount": 1
		}
	}).id('p8:11')

	event.custom({
		"type": "modern_industrialization:blast_furnace",
		"duration": 100,
		"eu": 128,
		"item_inputs": {
			"tag" : ("c:calorite_dusts"),
			"amount": 1
		},
		"fluid_inputs": {
			"fluid": 'modern_industrialization:cryofluid',
			"amount": 250
		},
		"item_outputs": {
			"item":"modern_industrialization:calorite_hot_ingot",
			"amount": 1
			}
	}).id('p8:12')

	event.custom({
		"type": "modern_industrialization:assembler",
		"item_outputs": {
		"item":"ad_astra:tier_1_rocket",
		"amount": 1
		},
		"duration": 200,
		"eu": 8,
		"item_inputs": [{
			"item" : ("ad_astra:rocket_nose_cone"),
			"amount": 1
		},
		{
			"item" : ("modern_industrialization:steel_block"),
			"amount": 6
		},
		{
			"item" : ("ad_astra:steel_tank"),
			"amount": 2
		},
		{
			"item" : ("ad_astra:steel_engine"),
			"amount": 1
		},
		{
			"item" : ("ad_astra:rocket_fin"),
			"amount": 4
		}
	]
	}).id('p8:13')

	event.custom({
		"type": "modern_industrialization:assembler",
		"item_outputs": {
		"item":"ad_astra:tier_2_rocket",
		"amount": 1
		},
		"duration": 200,
		"eu": 8,
		"item_inputs": [{
			"item" : ("ad_astra:rocket_nose_cone"),
			"amount": 1
		},
		{
			"item" : ("ad_astra:desh_block"),
			"amount": 6
		},
		{
			"item" : ("ad_astra:desh_tank"),
			"amount": 2
		},
		{
			"item" : ("ad_astra:desh_engine"),
			"amount": 1
		},
		{
			"item" : ("ad_astra:rocket_fin"),
			"amount": 4
		}
	]
	}).id('p8:14')

	event.custom({
		"type": "modern_industrialization:assembler",
		"item_outputs": {
		"item":"ad_astra:tier_3_rocket",
		"amount": 1
		},
		"duration": 200,
		"eu": 8,
		"item_inputs": [{
			"item" : ("ad_astra:rocket_nose_cone"),
			"amount": 1
		},
		{
			"item" : ("ad_astra:ostrum_block"),
			"amount": 6
		},
		{
			"item" : ("ad_astra:ostrum_tank"),
			"amount": 2
		},
		{
			"item" : ("ad_astra:ostrum_engine"),
			"amount": 1
		},
		{
			"item" : ("ad_astra:rocket_fin"),
			"amount": 4
		}
	]
	}).id('p8:15')

	event.custom({
		"type": "modern_industrialization:assembler",
		"item_outputs": {
		"item":"ad_astra:tier_4_rocket",
		"amount": 1
		},
		"duration": 200,
		"eu": 8,
		"item_inputs": [{
			"item" : ("ad_astra:rocket_nose_cone"),
			"amount": 1
		},
		{
			"item" : ("ad_astra:calorite_block"),
			"amount": 6
		},
		{
			"item" : ("ad_astra:calorite_tank"),
			"amount": 2
		},
		{
			"item" : ("ad_astra:calorite_engine"),
			"amount": 1
		},
		{
			"item" : ("ad_astra:rocket_fin"),
			"amount": 4
		}
	]
	}).id('p8:16')

	event.custom({
		"type": "modern_industrialization:quarry",
		"eu": 12,
		"duration": 600,
		"item_inputs": {
		  "item": "ad_astra:tier_1_rocket",
		  "amount": 1,
		  "probability": 0.04
		},
		"item_outputs": [
		  {
			"item": 'ad_astra:moon_desh_ore',
			"amount": 1,
			"probability": 0.125
		  },
		  {
			"item": 'ad_astra:moon_cheese_ore',
			"amount": 1,
			"probability": 0.05
		  },
		  {
			"item": 'ad_astra:moon_iron_ore',
			"amount": 1,
			"probability": 0.15
		  },
		  {
			"item": 'ad_astra:moon_ice_shard_ore',
			"amount": 1,
			"probability": 0.10
		  },
		  {
			"item": 'ad_astra:deepslate_desh_ore',
			"amount": 1,
			"probability": 0.125
		  }
		]
	  }).id('p8:17')

	  event.custom({
		"type": "modern_industrialization:quarry",
		"eu": 24,
		"duration": 600,
		"item_inputs": {
		  "item": "ad_astra:tier_2_rocket",
		  "amount": 1,
		  "probability": 0.04
		},
		"item_outputs": [
		  {
			"item": 'ad_astra:mars_ostrum_ore',
			"amount": 1,
			"probability": 0.075
		  },
		  {
			"item": 'ad_astra:mars_diamond_ore',
			"amount": 1,
			"probability": 0.065
		  },
		  {
			"item": 'ad_astra:mars_ice_shard_ore',
			"amount": 1,
			"probability": 0.2
		  },
		  {
			"item": 'ad_astra:mars_iron_ore',
			"amount": 1,
			"probability": 0.1
		  },
		  {
			"item": 'ad_astra:deepslate_ostrum_ore',
			"amount": 1,
			"probability": 0.075
		  }
		]
	}).id('p8:18')

	event.custom({
		"type": "modern_industrialization:quarry",
		"eu": 48,
		"duration": 600,
		"item_inputs": {
		  "item": "ad_astra:tier_3_rocket",
		  "amount": 1,
		  "probability": 0.04
		},
		"item_outputs": [
		  {
			"item": 'ad_astra:venus_calorite_ore',
			"amount": 1,
			"probability": 0.05
		  },
		  {
			"item": 'ad_astra:venus_coal_ore',
			"amount": 1,
			"probability": 0.3
		  },
		  {
			"item": 'ad_astra:venus_gold_ore',
			"amount": 1,
			"probability": 0.15
		  },
		  {
			"item": 'ad_astra:venus_diamond_ore',
			"amount": 1,
			"probability": 0.1
		  },
		  {
			"item": 'ad_astra:deepslate_calorite_ore',
			"amount": 1,
			"probability": 0.05
		  }
		]
	}).id('p8:19')

	
	//Endgame rocket mission

	event.custom({
		"type": "modern_industrialization:quarry",
		"eu": 64,
		"duration": 600,
		"item_inputs": {
		  "item": "ad_astra:tier_4_rocket",
		  "amount": 1,
		  "probability": 0.04
		},
		"item_outputs": [
		  {
			"item": 'bewitchment:demon_heart',
			"amount": 1,
			"probability": 0.1
		  },
		  {
			"item": 'bewitchment:demon_horn',
			"amount": 1,
			"probability": 0.2
		  },
		  {
			"item": 'bewitchment:snake_tongue',
			"amount": 1,
			"probability": 0.2
		  },
		  {
			"item": 'bewitchment:ectoplasm',
			"amount": 1,
			"probability": 0.1
		  },
		  {
			"item": 'miskatonicmysteries:incantation_yog',
			"amount": 1,
			"probability": 0.001
		  },
		  {
			"item": 'miskatonicmysteries:resonate_ooze',
			"amount": 1,
			"probability": 0.05
		  },
		  {
			"item": 'miskatonicmysteries:absinthe',
			"amount": 1,
			"probability": 0.05
		  },
		  {
			"item": 'miskatonicmysteries:oceanic_gold',
			"amount": 9,
			"probability": 0.25
		  },
		  {
			"item": 'miskatonicmysteries:the_orb',
			"amount": 1,
			"probability": 0.005
		  },
		  {
			"item": 'miskatonicmysteries:infested_wheat',
			"amount": 5,
			"probability": 0.01
		  }
		]
	}).id('p8:20')

})