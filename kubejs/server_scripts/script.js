// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	event.add('fabric:tools/axes', 'additionaladditions:rose_gold_axe')
	event.add('fabric:tools/axes', 'additionaladditions:gilded_netherite_axe')
	event.add('fabric:tools/axes', 'modern_industrialization:diesel_chainsaw')
	event.add('fabric:tools/axes', 'spectrum:multitool')
	event.add('fabric:tools/axes', 'spectrum:bedrock_axe')
	event.add('fabric:tools/axes', 'ae2:certus_quartz_axe')
	event.add('fabric:tools/axes', 'ae2:nether_quartz_axe')
	event.add('c:cooked_eggs', 'additionaladditions:fried_egg')
	event.add('c:iron_rods', 'modern_industrialization:iron_rod')
	event.add('c:raw_silver_ores', 'bewitchment:raw_silver')
	event.remove('c:steel_ingots', 'ad_astra:steel_ingot')
	event.remove('c:steel_nuggets', 'ad_astra:steel_nugget')
	event.remove('c:steel_blocks', 'ad_astra:steel_block')
	event.remove('c:steel_plates', 'ad_astra:steel_plate')
	event.remove('c:iron_plates', 'ad_astra:iron_plate')
	event.remove('c:iron_rods', 'ad_astra:iron_rod')

	event.remove('c:platinum_dusts', 'chemlib:platinum_dust')
	event.remove('c:platinum_nuggets', 'chemlib:platinum_nugget')
	event.remove('c:platinum_ingots', 'chemlib:platinum_ingot')
	event.remove('c:platinum_plates', 'chemlib:platinum_plate')

	event.remove('c:tungsten_dusts', 'chemlib:tungsten_dust')
	event.remove('c:tungsten_nuggets', 'chemlib:tungsten_nugget')
	event.remove('c:tungsten_ingots', 'chemlib:tungsten_ingot')
	event.remove('c:tungsten_plates', 'chemlib:tungsten_plate')

	event.remove('c:aluminum_dusts', 'chemlib:aluminum_dust')
	event.remove('c:aluminum_nuggets', 'chemlib:aluminum_nugget')
	event.remove('c:aluminum_ingots', 'chemlib:aluminum_ingot')
	event.remove('c:aluminum_plates', 'chemlib:aluminum_plate')

	event.remove('c:chromium_dusts', 'chemlib:chromium_dust')
	event.remove('c:chromium_nuggets', 'chemlib:chromium_nugget')
	event.remove('c:chromium_ingots', 'chemlib:chromium_ingot')
	event.remove('c:chromium_plates', 'chemlib:chromium_plate')

	event.remove('c:manganese_dusts', 'chemlib:manganese_dust')
	event.remove('c:manganese_nuggets', 'chemlib:manganese_nugget')
	event.remove('c:manganese_ingots', 'chemlib:manganese_ingot')
	event.remove('c:manganese_plates', 'chemlib:manganese_plate')

	event.remove('c:titanium_dusts', 'chemlib:titanium_dust')
	event.remove('c:titanium_nuggets', 'chemlib:titanium_nugget')
	event.remove('c:titanium_ingots', 'chemlib:titanium_ingot')
	event.remove('c:titanium_plates', 'chemlib:titanium_plate')
	
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

ServerEvents.recipes(event => {
	// Change recipes here
	event.replaceInput({mod: 'farmersdelight'}, 'farmersdelight:fried_egg', '#c:cooked_eggs')
	event.replaceInput({mod: 'ad_astra'}, 'ad_astra:steel_ingot', '#c:steel_ingots')
	event.replaceOutput({mod: 'farmersdelight'}, 'farmersdelight:tree_bark', '2x farmersdelight:tree_bark')
	event.replaceInput({id: 'ad_astra:recipes/wheel'}, 'minecraft:black_dye', 'modern_industrialization:rubber_sheet')
	event.replaceInput({id: 'ad_astra:recipes/solar_panel'}, '#c:steel_plates', 'modern_industrialization:silicon_wafer')
	event.replaceInput({id: 'alchemistry:dissolver'}, 'minecraft:redstone', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:combiner'}, 'minecraft:redstone', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:liquifier'}, 'minecraft:redstone', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:atomizer'}, 'minecraft:redstone', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:compactor'}, 'minecraft:redstone', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:reactor_casing'}, 'minecraft:blaze_powder', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:fission_core'}, 'minecraft:blaze_rod', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:fission_core'}, 'chemlib:yttrium_ingot', 'modern_industrialization:yttrium_dust')
	event.replaceInput({id: 'alchemistry:fusion_core'}, 'minecraft:netherite_scrap', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:fusion_core'}, 'chemlib:tungsten_ingot', 'modern_industrialization:tungsten_ingot')
	//event.replaceInput({id: 'miskatonicmysteries:crafting/chemistry_set'}, 'minecraft:iron_nugget', 'bewitchment:brazier')
	//event.replaceInput({id: 'miskatonicmysteries:crafting/altars/blackstone_altar'}, 'minecraft:blackstone', 'bewitchment:blackstone_witch_altar')
	//event.replaceInput({id: 'miskatonicmysteries:crafting/altars/stone_altar'}, 'minecraft:stone', 'bewitchment:stone_witch_altar')
	//event.replaceInput({id: 'miskatonicmysteries:crafting/altars/mossy_stone_altar'}, 'minecraft:mossy_cobblestone', 'bewitchment:mossy_cobblestone_witch_altar')
	//event.replaceInput({id: 'miskatonicmysteries:crafting/altars/funky_altar'}, 'minecraft:purpur_block', 'bewitchment:purpur_witch_altar')
	//event.replaceInput({id: 'miskatonicmysteries:crafting/altars/nether_brick_altar'}, 'minecraft:nether_bricks', 'bewitchment:nether_brick_witch_altar')
	//event.replaceInput({id: 'miskatonicmysteries:crafting/altars/prismarine_altar'}, 'minecraft:prismarine_bricks', 'bewitchment:prismarine_witch_altar')
	//event.replaceInput({id: 'miskatonicmysteries:crafting/altars/sandstone_altar'}, 'minecraft:sandstone', 'bewitchment:end_stone_witch_altar')
	//event.replaceInput({id: 'miskatonicmysteries:crafting/altars/deepslate_altar'}, 'minecraft:deepslate', 'bewitchment:obsidian_witch_altar')
	//event.replaceInput({id: 'miskatonicmysteries:crafting/altars/coral_altar'}, '#minecraft:dead_coral_blocks', 'bewitchment:golden_witch_altar')
	

	event.remove({id: 'alchemistry:compactor/platinum_dust'})
	event.remove({id: 'alchemistry:compactor/tungsten_dust'})
	event.remove({id: 'alchemistry:compactor/aluminum_dust'})
	event.remove({id: 'alchemistry:compactor/titanium_dust'})
	event.remove({id: 'alchemistry:compactor/chromium_dust'})
	event.remove({id: 'alchemistry:compactor/manganese_dust'})
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
	event.remove({input: '#kibe:sleeping_bags'})
	event.remove({id: 'ad_astra:conversion/fuel_from_oil'})
	event.remove({output: 'kibe:white_sleeping_bag'})
	event.remove({output: 'kibe:orange_sleeping_bag'})
	event.remove({output: 'kibe:magenta_sleeping_bag'})
	event.remove({output: 'kibe:light_blue_sleeping_bag'})
	event.remove({output: 'kibe:yellow_sleeping_bag'})
	event.remove({output: 'kibe:lime_sleeping_bag'})
	event.remove({output: 'kibe:pink_sleeping_bag'})
	event.remove({output: 'kibe:gray_sleeping_bag'})
	event.remove({output: 'kibe:light_gray_sleeping_bag'})
	event.remove({output: 'kibe:cyan_sleeping_bag'})
	event.remove({output: 'kibe:sleeping_bag'})
	event.remove({output: 'kibe:purple_sleeping_bag'})
	event.remove({output: 'kibe:green_sleeping_bag'})
	event.remove({output: 'kibe:brown_sleeping_bag'})
	event.remove({output: 'kibe:red_sleeping_bag'})
	event.remove({output: 'kibe:black_sleeping_bag'})

	event.remove({output: 'farmersdelight:fried_egg'})
	event.remove({output: 'chisel:chisel'}),
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
	event.remove({output: 'ae2:silicon'}),
	event.remove({id: 'ae2:inscriber/silicon_print'}),
	event.remove({id: 'ae2:inscriber/logic_processor_print'}),
	event.remove({id: 'ae2:inscriber/engineering_processor_print'}),
	event.remove({id: 'ae2:inscriber/calculation_processor_print'}),
	event.remove({id: 'modern_industrialization:compat/ae2/printed_silicon'}),

	event.shaped('chisel:chisel', [
		'III',
		' I ',
		' S '
	  ], {
		S: 'minecraft:stick',
		I: '#c:iron_ingots'
	})
	
	
	event.smelting('minecraft:copper_block', 'minecraft:cut_copper')

	event.shapeless('9x ad_astra:desh_ingot', 'ad_astra:desh_block')
	event.shapeless('9x ad_astra:ostrum_ingot', 'ad_astra:ostrum_block')
	event.shapeless('9x ad_astra:calorite_ingot', 'ad_astra:calorite_block')
		
	event.custom({
		"type": "ad_astra:fuel_conversion",
		"input": "ad_astra:oil",
		"output": "modern_industrialization:crude_oil",
		"conversion_ratio": 0.1
	}).id('p8:1')

	event.custom({
		"type": "modern_industrialization:unpacker",
		"item_outputs": {
		"item": "minecraft:amethyst_shard",
		"amount": 4
		},
		"duration": 10,
		"eu": 2,
		"item_inputs": {
		 "item" : "minecraft:amethyst_block",
		 "amount": 1
		}
	}).id('p8:2')

	event.custom({
		"type": "modern_industrialization:unpacker",
		"item_outputs": {
		"item": "minecraft:quartz",
		"amount": 4
		},
		"duration": 10,
		"eu": 2,
		"item_inputs": {
		 "item" : "minecraft:quartz_block",
		 "amount": 1
		}
	}).id('p8:3')

	event.custom({
		"type": "modern_industrialization:unpacker",
		"item_outputs": {
		"item":"spectrum:citrine_shard",
		"amount": 4
		},
		"duration": 10,
		"eu": 2,
		"item_inputs": {
		 "item" : ("spectrum:citrine_block"),
		 "amount": 1
		}
	}).id('p8:4')

	event.custom({
		"type": "modern_industrialization:unpacker",
		"item_outputs": {
		"item":"spectrum:topaz_shard",
		"amount": 4
		},
		"duration": 10,
		"eu": 2,
		"item_inputs": {
		 "item" : ("spectrum:topaz_block"),
		 "amount": 1
		}
	}).id('p8:5')

	event.custom({
		"type": "ad_astra:fuel_conversion",
		"input": "modern_industrialization:boosted_diesel",
		"output": "ad_astra:fuel",
		"conversion_ratio": 0.5
	}).id('p8:6')

	event.custom({
		"type": "modern_industrialization:compressor",
		"item_outputs": {
		"item":"ad_astra:desh_plate",
		"amount": 1
		},
		"duration": 10,
		"eu": 16,
		"item_inputs": {
			"item" : ("ad_astra:desh_ingot"),
			"amount": 1
		}
	}).id('p8:7')

	event.custom({
		"type": "modern_industrialization:compressor",
		"item_outputs": {
		"item":"ad_astra:ostrum_plate",
		"amount": 1
		},
		"duration": 20,
		"eu": 16,
		"item_inputs": {
			"item" : ("ad_astra:ostrum_ingot"),
			"amount": 1
		}
	}).id('p8:8')

	event.custom({
		"type": "modern_industrialization:compressor",
		"item_outputs": {
		"item":"ad_astra:calorite_plate",
		"amount": 1
		},
		"duration": 40,
		"eu": 16,
		"item_inputs": {
			"item" : ("ad_astra:calorite_ingot"),
			"amount": 1
		}
	}).id('p8:9')

	event.custom({
		"type": "modern_industrialization:blast_furnace",
		"fluid_inputs": {
			"fluid": 'modern_industrialization:oxygen',
			"amount": 250
		},
		"item_outputs": {
		"item":"ad_astra:desh_ingot",
		"amount": 1
		},
		"duration": 100,
		"eu": 16,
		"item_inputs": {
			"item" : ("ad_astra:raw_desh"),
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
		"item":"ad_astra:ostrum_ingot",
		"amount": 1
		},
		"duration": 100,
		"eu": 32,
		"item_inputs": {
			"item" : ("ad_astra:raw_ostrum"),
			"amount": 1
		}
	}).id('p8:11')

	event.custom({
		"type": "modern_industrialization:blast_furnace",
		"duration": 100,
		"eu": 64,
		"item_inputs": {
			"item" : ("ad_astra:raw_calorite"),
			"amount": 1
		},
		"fluid_inputs": {
			"fluid": 'modern_industrialization:cryofluid',
			"amount": 250
		},
		"item_outputs": {
			"item":"ad_astra:calorite_ingot",
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
			"probability": 0.2
		  }
		]
	  }).id('p8:20')

})