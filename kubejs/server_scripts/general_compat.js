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


})