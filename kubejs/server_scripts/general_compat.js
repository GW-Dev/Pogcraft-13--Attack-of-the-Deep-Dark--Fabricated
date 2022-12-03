// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Misc Changes
	event.remove({output: 'chisel:chisel'}),
	event.replaceInput({mod: 'additionaladditions'}, 'additionaladditions:gold_ring', 'modern_industrialization:gold_ring')
	event.replaceOutput({mod: 'farmersdelight'}, 'farmersdelight:tree_bark', '2x farmersdelight:tree_bark')
	event.remove({output: 'twilightforest:uncrafting_table'})
	event.remove({id: 'farmingforblockheads:red_fertilizer'})
	event.remove({id: 'farmingforblockheads:green_fertilizer'})


	// Fried egg unification
	event.replaceInput({mod: 'farmersdelight'}, 'farmersdelight:fried_egg', '#c:cooked_eggs')
	event.remove({output: 'farmersdelight:fried_egg'})


	//Kibe sleeping bag nightmare
	
	event.remove({input: '#kibe:sleeping_bags'})
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
	event.remove({output: 'kibe:angel_ring'})


	// AE2 tweaks for progression

	event.remove({output: 'ae2:silicon'}),
	event.remove({id: 'ae2:inscriber/silicon_print'}),
	event.remove({id: 'ae2:inscriber/logic_processor_print'}),
	event.remove({id: 'ae2:inscriber/engineering_processor_print'}),
	event.remove({id: 'ae2:inscriber/calculation_processor_print'}),
	event.remove({id: 'modern_industrialization:compat/ae2/printed_silicon'}),


	// Misc changes for progression
	event.shaped('chisel:chisel', [
		'III',
		' I ',
		' S '
	  ], {
		S: 'minecraft:stick',
		I: '#c:iron_ingots'
	})

	event.shaped('modern_industrialization:pyrolyze_oven', [
		'III',
		'IAI',
		'IBI'
	  ], {
		A: 'modern_industrialization:advanced_machine_hull',
		B: 'modern_industrialization:coke_oven',
		I: 'modern_industrialization:cupronickel_coil'
	})

	event.shaped('modern_industrialization:greenhouse', [
		'BIB',
		'FAF',
		'BIB'
	  ], {
		A: 'modern_industrialization:advanced_machine_hull',
		B: 'modern_industrialization:bronze_plated_bricks',
		F: 'farmingforblockheads:green_fertilizer',
		I: 'modern_industrialization:electronic_circuit'
	})

	event.shaped('kibe:angel_ring', [
		'IGI',
		'DRD',
		'ISI'
	  ], {
		S: 'modern_industrialization:quantum_chestplate',
		I: 'modern_industrialization:uu_matter_bucket',
		G: 'modern_industrialization:gravichestplate',
		D: 'bewitchment:demon_heart',
		R: 'kibe:diamond_ring'
	})
	
	event.smelting('minecraft:copper_block', 'minecraft:cut_copper')


	event.custom({
		"type": "modern_industrialization:blast_furnace",
		"item_outputs": {
		"item":"supplementaries:ash_brick",
		"amount": 1
		},
		"duration": 25,
		"eu": 4,
		"item_inputs": {
			"item" : "modern_industrialization:wood_pulp",
			"amount": 1
		}
	}).id('p8:21')

	event.custom({
		"type": "modern_industrialization:packer",
		"item_outputs": {
		"item":"supplementaries:ash_bricks",
		"amount": 1
		},
		"duration": 10,
		"eu": 4,
		"item_inputs": {
			"item" : ("supplementaries:ash_brick"),
			"amount": 4
		}
	}).id('p8:22')

	event.custom({
		"type": "modern_industrialization:centrifuge",
		"item_outputs": {
		"item":"farmersdelight:straw",
		"amount": 1
		},
		"duration": 10,
		"eu": 4,
		"item_inputs": {
			"item" : ("modern_industrialization:wood_pulp"),
			"amount": 4
		}
	}).id('p8:23')

	event.recipes.modern_industrialization.pyrolyze_oven(128, 100)
	.itemIn("64x #minecraft:logs_that_burn")
	.itemOut("64x minecraft:charcoal")
	.fluidIn("modern_industrialization:oxygen", 1000)
	.fluidOut("modern_industrialization:creosote", 5000)
	.id('p8:24')

	event.recipes.modern_industrialization.pyrolyze_oven(128, 200)
	.itemIn("64x #c:charcoal")
	.itemOut("64x modern_industrialization:coke")
	.fluidOut("modern_industrialization:raw_synthetic_oil", 500)
	.id('p8:25')

	event.recipes.modern_industrialization.chemical_reactor(64, 50)
	.itemIn("1x modern_industrialization:quartz_crushed_dust")
	.fluidIn("modern_industrialization:oxygen", 250)
	.fluidIn("modern_industrialization:nitrogen", 250)
	.fluidIn("modern_industrialization:toluene", 500)
	.itemOut("4x farmingforblockheads:red_fertilizer")
	.id('p8:27')

	event.recipes.modern_industrialization.chemical_reactor(64, 50)
	.itemIn("2x farmingforblockheads:red_fertilizer")
	.fluidIn("modern_industrialization:oxygen", 1000)
	.itemOut("4x farmingforblockheads:green_fertilizer")
	.id('p8:28')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:oak_sapling")
	.itemOut("16x minecraft:oak_log")
	.itemOut("2x minecraft:oak_sapling")
	.itemOut("2x minecraft:apple")
	.id('p8:29')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:spruce_sapling")
	.itemOut("16x minecraft:spruce_log")
	.itemOut("2x minecraft:spruce_sapling")
	.id('p8:30')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:jungle_sapling")
	.itemOut("16x minecraft:jungle_log")
	.itemOut("2x minecraft:jungle_sapling")
	.id('p8:31')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:birch_sapling")
	.itemOut("16x minecraft:birch_log")
	.itemOut("2x minecraft:birch_sapling")
	.id('p8:32')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:acacia_sapling")
	.itemOut("16x minecraft:acacia_log")
	.itemOut("2x minecraft:acacia_sapling")
	.id('p8:33')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:dark_oak_sapling")
	.itemOut("16x minecraft:dark_oak_log")
	.itemOut("2x minecraft:dark_oak_sapling")
	.itemOut("2x minecraft:apple")
	.id('p8:34')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:juniper_sapling")
	.itemOut("16x bewitchment:juniper_log")
	.itemOut("2x bewitchment:juniper_sapling")
	.id('p8:35')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:cypress_sapling")
	.itemOut("16x bewitchment:cypress_log")
	.itemOut("2x bewitchment:cypress_sapling")
	.id('p8:36')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:elder_sapling")
	.itemOut("16x bewitchment:elder_log")
	.itemOut("2x bewitchment:elder_sapling")
	.id('p8:37')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:dragons_blood_sapling")
	.itemOut("16x bewitchment:dragons_blood_log")
	.itemOut("2x bewitchment:dragons_blood_sapling")
	.id('p8:38')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bwplus:yew_sapling")
	.itemOut("16x bwplus:yew_log")
	.itemOut("2x bwplus:yew_sapling")
	.id('p8:39')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("charm:ebony_sapling")
	.itemOut("16x charm:ebony_log")
	.itemOut("2x charm:ebony_sapling")
	.id('p8:40')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("ecologics:walnut_sapling")
	.itemOut("16x ecologics:walnut_log")
	.itemOut("2x ecologics:walnut_sapling")
	.itemOut("2x ecologics:walnut")
	.id('p8:41')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:twilight_oak_sapling")
	.itemOut("16x twilightforest:twilight_oak_log")
	.itemOut("2x twilightforest:twilight_oak_sapling")
	.id('p8:42')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:canopy_sapling")
	.itemOut("16x twilightforest:canopy_log")
	.itemOut("2x twilightforest:canopy_sapling")
	.id('p8:43')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:mangrove_sapling")
	.itemOut("16x twilightforest:mangrove_log")
	.itemOut("2x twilightforest:mangrove_sapling")
	.id('p8:44')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:darkwood_sapling")
	.itemOut("16x twilightforest:dark_log")
	.itemOut("2x twilightforest:darkwood_sapling")
	.id('p8:45')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:hollow_oak_sapling")
	.itemOut("16x twilightforest:twilight_oak_log")
	.itemOut("2x twilightforest:hollow_oak_sapling")
	.id('p8:46')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:rainbow_oak_sapling")
	.itemOut("16x twilightforest:twilight_oak_log")
	.itemOut("2x twilightforest:rainbow_oak_sapling")
	.id('p8:47')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:mangrove_propagule")
	.itemOut("16x minecraft:mangrove_log")
	.itemOut("8x minecraft:mangrove_roots")
	.itemOut("2x minecraft:mangrove_propagule")
	.id('p8:48')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("ecologics:coconut_seedling")
	.itemOut("16x ecologics:coconut_log")
	.itemOut("2x ecologics:coconut_seedling")
	.itemOut("4x ecologics:coconut")
	.id('p8:49')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("farmersdelight:cabbage_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x farmersdelight:cabbage")
	.itemOut("2x farmersdelight:cabbage_seeds")
	.id('p8:50')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("farmersdelight:tomato_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x farmersdelight:tomato")
	.itemOut("2x farmersdelight:tomato_seeds")
	.id('p8:51')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("farmersdelight:onion")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("4x farmersdelight:onion")
	.id('p8:52')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.fluidIn("minecraft:water", 250)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("farmersdelight:rice")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("3x farmersdelight:rice")
	.itemOut("1x farmersdelight:straw")
	.id('p8:53')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("supplementaries:flax_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x supplementaries:flax")
	.itemOut("2x supplementaries:flax_seeds")
	.id('p8:54')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:wheat_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x minecraft:wheat")
	.itemOut("2x minecraft:wheat_seeds")
	.id('p8:55')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:pumpkin_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x minecraft:pumpkin")
	.itemOut("2x minecraft:pumpkin_seeds")
	.id('p8:56')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:melon_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x minecraft:melon")
	.itemOut("2x minecraft:melon_seeds")
	.id('p8:57')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.fluidIn("minecraft:water", 250)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:kelp")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("3x minecraft:kelp")
	.id('p8:58')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:cactus")
	.itemIn("minecraft:sand", 0)
	.itemOut("5x minecraft:cactus")
	.id('p8:59')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:sugar_cane")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("5x minecraft:sugar_cane")
	.id('p8:60')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:bamboo")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("5x minecraft:bamboo")
	.id('p8:61')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:beetroot_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x minecraft:beetroot")
	.itemOut("2x minecraft:beetroot_seeds")
	.id('p8:62')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:sweet_berries")
	.itemIn("minecraft:vine", 0)
	.itemOut("5x minecraft:sweet_berries")
	.id('p8:63')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:glow_berries")
	.itemIn("minecraft:vine", 0)
	.itemOut("5x minecraft:glow_berries")
	.id('p8:64')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:witchberry")
	.itemIn("bewitchment:fruiting_bramble", 0)
	.itemOut("5x bewitchment:witchberry")
	.id('p8:65')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("ecologics:prickly_pear")
	.itemIn("minecraft:cactus", 0)
	.itemOut("5x ecologics:prickly_pear")
	.id('p8:66')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bwplus:dragonfruit")
	.itemIn("minecraft:vine", 0)
	.itemOut("5x bwplus:dragonfruit")
	.id('p8:67')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:garlic")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("5x bewitchment:garlic")
	.id('p8:68')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:aconite_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x bewitchment:aconite")
	.itemOut("2x bewitchment:aconite_seeds")
	.id('p8:69')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:belladonna_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x bewitchment:belladonna")
	.itemOut("2x bewitchment:belladonna_seeds")
	.id('p8:70')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:mandrake_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x bewitchment:mandrake_root")
	.itemOut("2x bewitchment:mandrake_seeds")
	.id('p8:71')
})