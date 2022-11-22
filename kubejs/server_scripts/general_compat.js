// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Misc Changes
	event.remove({output: 'chisel:chisel'}),
	event.replaceInput({mod: 'additionaladditions'}, 'additionaladditions:gold_ring', 'modern_industrialization:gold_ring')
	event.replaceOutput({mod: 'farmersdelight'}, 'farmersdelight:tree_bark', '2x farmersdelight:tree_bark')
	event.remove({output: 'twilightforest:uncrafting_table'})


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


	//Spectrum MI integation

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


})