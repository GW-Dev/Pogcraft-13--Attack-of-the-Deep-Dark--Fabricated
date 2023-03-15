// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')


function wired_redstone(event) {

	event.recipes.modern_industrialization.blast_furnace(32, 50)
	.itemIn("4x #c:iron_ingots")
	.itemOut("2x wiredredstone:redstone_alloy_ingot")
	.fluidIn("modern_industrialization:molten_redstone", 1000)
	.id('pcompatrs:1')

	event.recipes.modern_industrialization.blast_furnace(32, 50)
	.itemIn("1x #c:steel_ingots")
	.itemOut("4x wiredredstone:redstone_alloy_ingot")
	.fluidIn("modern_industrialization:molten_redstone", 1000)
	.id('pcompatrs:2')

	event.remove({type: "wiredredstone:redstone_assembler_shaped"})
	event.remove({type: "wiredredstone:redstone_assembler_shapeless"})
	

	event.recipes.modern_industrialization.wiremill({
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "wiredredstone:redstone_alloy_ingot"}
		],
		item_outputs: [
			{item: "wiredredstone:red_alloy_wire", amount: 4}
		]
	}).id('pcompatrs:3')

	function dyed_wire(color) {
		event.recipes.modern_industrialization.packer(2, 200)
		.itemOut(`wiredredstone:${color}_insulated_wire`)
		.itemIn("wiredredstone:red_alloy_wire")
		.itemIn(`#c:${color}_dyes`)
	}
	
	function dyed_bundled_cable(color) {
		event.recipes.modern_industrialization.packer(2, 200)
		.itemOut(`wiredredstone:${color}_bundled_cable`)
		.itemIn("wiredredstone:bundled_cable")
		.itemIn(`#c:${color}_dyes`)
	}

	event.replaceInput({output: "wiredredstone:redstone_assembler"}, "minecraft:crafting_table", "modern_industrialization:basic_machine_hull")

	dyed_wire("white")
	dyed_wire("orange")
	dyed_wire("magenta")
	dyed_wire("light_blue")
	dyed_wire("yellow")
	dyed_wire("lime")
	dyed_wire("pink")
	dyed_wire("gray")
	dyed_wire("light_gray")
	dyed_wire("cyan")
	dyed_wire("purple")
	dyed_wire("blue")
	dyed_wire("brown")
	dyed_wire("green")
	dyed_wire("red")
	dyed_wire("black")

	dyed_bundled_cable("white")
	dyed_bundled_cable("orange")
	dyed_bundled_cable("magenta")
	dyed_bundled_cable("light_blue")
	dyed_bundled_cable("yellow")
	dyed_bundled_cable("lime")
	dyed_bundled_cable("pink")
	dyed_bundled_cable("gray")
	dyed_bundled_cable("light_gray")
	dyed_bundled_cable("cyan")
	dyed_bundled_cable("purple")
	dyed_bundled_cable("blue")
	dyed_bundled_cable("brown")
	dyed_bundled_cable("green")
	dyed_bundled_cable("red")
	dyed_bundled_cable("black")

	event.recipes.modern_industrialization.packer({
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "wiredredstone:red_alloy_wire", amount: 5},
			{item: "minecraft:string", amount: 4}
		],
		item_outputs: [
			{item: "wiredredstone:bundled_cable"}
		]
	}).id('pcompatrs:6')

	event.recipes.modern_industrialization.compressor({
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "minecraft:smooth_stone"}
		],
		item_outputs: [
			{item: "wiredredstone:stone_plate", amount: 2}
		]
	}).id('pcompatrs:7')

	event.shapeless("wiredredstone:redstone_wire_plate", ["minecraft:redstone", "wiredredstone:stone_plate"])

	
	
	event.shaped("wiredredstone:redstone_delay_line", [
		" RP",
		"RP ",
		"P  ",
	],
	{
		R: "minecraft:redstone",
		P: "wiredredstone:redstone_wire_plate",
	})

	event.shaped("wiredredstone:redstone_cathode", [
		"RR ",
		"RR ",
		"SP ",
	], 
	{
		R: "minecraft:redstone",
		P: "wiredredstone:redstone_wire_plate",
		S: "wiredredstone:stone_plate",
	})

	event.shaped("wiredredstone:redstone_anode", [
		"RRR",
		"SPS",
		"   ",
	],
	{
		R: "minecraft:redstone",
		P: "wiredredstone:redstone_wire_plate",
		S: "wiredredstone:stone_plate",
	})

	event.shapeless("wiredredstone:redstone_inverting_cathode", ["minecraft:redstone_torch", "wiredredstone:redstone_cathode"])

	event.shaped("wiredredstone:gate_diode", [
		"SAS",
		"SCS",
		"SPS"
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		C: "wiredredstone:redstone_cathode",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
	})

	event.shaped("wiredredstone:gate_and", [
		"AIA",
		"III",
		"SPS",
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_or", [
		"SIS",
		"PIP",
		"SPS",
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_nand", [
		"AAA",
		"III",
		"SPS"
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_nor", [
		"SAS",
		"PIP",
		"SPS"
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_not", [
		"SAS",
		"SIS",
		"SPS",
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_repeater", [
		"DID",
		"PIP",
		"SPP",
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		D: "wiredredstone:redstone_delay_line",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_rs_latch", [
		"AIP",
		"PPP",
		"PIA",
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		A: "wiredredstone:redstone_anode",
		I: "wiredredstone:redstone_inverting_cathode"
	})


}

ServerEvents.recipes(event => {
	// Misc Changes
	wired_redstone(event)
	event.remove({output: 'chisel:chisel'}),
	event.remove({output: 'catwalksinc:iron_rod'}),
	event.replaceInput({mod: 'additionaladditions'}, 'additionaladditions:gold_ring', 'modern_industrialization:gold_ring')
	event.replaceInput({mod: 'ae2'}, 'minecraft:iron_ingot', 'modern_industrialization:steel_plate')
	event.replaceInput({mod: 'merequester'}, 'minecraft:iron_ingot', 'modern_industrialization:steel_plate')
	event.replaceInput({mod: 'megacells'}, 'minecraft:iron_ingot', 'modern_industrialization:aluminum_plate')
	event.replaceInput({mod: 'dml-refabricated'}, 'minecraft:iron_ingot', 'modern_industrialization:steel_ingot')
	event.replaceInput({mod: 'dml-refabricated'}, 'minecraft:gold_ingot', 'modern_industrialization:electrum_ingot')
	event.replaceInput({id: 'dml-refabricated:soot_plate'}, 'minecraft:obsidian', 'modern_industrialization:carbon_large_plate')
	event.replaceOutput({mod: 'farmersdelight'}, 'farmersdelight:tree_bark', '2x farmersdelight:tree_bark')
	event.remove({output: 'twilightforest:uncrafting_table'})
	event.remove({output: 'ae2:logic_processor'})
	event.remove({output: 'ae2:engineering_processor'})
	event.remove({output: 'ae2:calculation_processor'})
	event.remove({id: 'farmingforblockheads:red_fertilizer'})
	event.remove({id: 'farmingforblockheads:green_fertilizer'})
	event.remove({id: 'dml_refabricated:soot_redstone'})
	event.remove({id: 'dmlsimulacrum:polymer_clay'})
	event.remove({id: 'spirit:soul_engulfing/soul_steel'})
	event.remove({id: 'spirit:soul_engulfing/soul_steel_block'})
	event.remove({id: 'spirit:soul_engulfing/soul_powder'})
	event.remove({id: 'spirit:soul_engulfing/soul_powder_block'})
	event.remove({id: 'spirit:soul_engulfing/soul_slate'})
	event.remove({id: 'moderndynamics:item_pipe'})
	event.remove({id: 'moderndynamics:fluid_pipe'})
	event.replaceInput({mod: 'moderndynamics'}, 'minecraft:iron_ingot', 'modern_industrialization:steel_plate')
	event.replaceInput({mod: 'moderndynamics'}, 'minecraft:iron_nugget', 'modern_industrialization:steel_nugget')	
	event.replaceInput({mod: 'tis3d'}, 'minecraft:iron_ingot', 'modern_industrialization:steel_plate')
	event.replaceInput({mod: 'tis3d'}, 'minecraft:redstone', 'wiredredstone:redstone_alloy_ingot')
	event.remove({id: 'tis3d:prism'})
	event.remove({id: 'tis3d:casing'})
	event.remove({id: 'tis3d:controller'})

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
	}).id('pcompatgeneral:1')

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
	}).id('pcompatgeneral:2')

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
	}).id('pcompatgeneral:3')

	event.recipes.modern_industrialization.pyrolyze_oven(128, 100)
	.itemIn("64x #minecraft:logs_that_burn")
	.itemOut("64x minecraft:charcoal")
	.fluidIn("modern_industrialization:oxygen", 1000)
	.fluidOut("modern_industrialization:creosote", 5000)
	.id('pcompatpyro:1')

	event.recipes.modern_industrialization.pyrolyze_oven(128, 200)
	.itemIn("64x #c:charcoal")
	.itemOut("64x modern_industrialization:coke")
	.fluidOut("modern_industrialization:raw_synthetic_oil", 500)
	.id('pcompatpyro:2')

	event.recipes.modern_industrialization.chemical_reactor(64, 50)
	.itemIn("1x modern_industrialization:quartz_crushed_dust")
	.fluidIn("modern_industrialization:oxygen", 250)
	.fluidIn("modern_industrialization:nitrogen", 250)
	.fluidIn("modern_industrialization:toluene", 500)
	.itemOut("4x farmingforblockheads:red_fertilizer")
	.id('pcompatgeneral:6')

	event.recipes.modern_industrialization.chemical_reactor(64, 50)
	.itemIn("2x farmingforblockheads:red_fertilizer")
	.fluidIn("modern_industrialization:oxygen", 1000)
	.itemOut("4x farmingforblockheads:green_fertilizer")
	.id('pcompatgeneral:7')

	event.recipes.modern_industrialization.chemical_reactor(64, 50)
	.itemIn("4x minecraft:clay_ball")
	.itemIn("#c:lapis")
	.fluidIn("modern_industrialization:polyethylene", 1000)
	.itemOut("8x dml-refabricated:polymer_clay")
	.id('pcompatgeneral:8')

	event.recipes.modern_industrialization.electrolyzer(32, 50)
	.itemIn("2x #c:red_alloy_ingots")
	.fluidIn("modern_industrialization:creosote", 500)
	.itemOut("16x dml-refabricated:soot_redstone")
	.id('pcompatgeneral:9')

	event.recipes.modern_industrialization.chemical_reactor(4, 50)
	.itemIn("4x #c:quartz_dusts")
	.itemIn("3x modern_industrialization:beryllium_tiny_dust")
	.itemIn("2x modern_industrialization:copper_tiny_dust")
	.fluidIn("modern_industrialization:oxygen", 6000)
	.fluidIn("modern_industrialization:sodium_hydroxide", 4000)
	.fluidIn("modern_industrialization:chlorine", 500)
	.itemOut("16x minecraft:prismarine_shard")
	.id('pcompatgeneral:10')

	event.recipes.modern_industrialization.mixer(32, 50)
	.itemIn("minecraft:magma_block")
	.fluidOut("minecraft:lava", 1000)
	.id('pcompatgeneral:11')

	event.recipes.modern_industrialization.chemical_reactor(4, 50)
	.itemIn("16x #c:quartz_dusts")
	.itemIn("2x modern_industrialization:aluminum_tiny_dust")
	.itemOut("16x ae2:certus_quartz_crystal")
	.id('pcompatgeneral:12')

	event.custom({
		"type": "modern_industrialization:assembler",
		"item_outputs": {
		"item":"moderndynamics:item_pipe",
		"amount": 16
		},
		"duration": 100,
		"eu": 8,
		"item_inputs": [{
			"item" : ("modern_industrialization:steel_curved_plate"),
			"amount": 6
		},
		{
			"item" : ("modern_industrialization:steel_gear"),
			"amount": 3
		},
		{
			"tag" : ("c:glass_blocks"),
			"amount": 3
		},
		{
			"item" : ("modern_industrialization:iron_dust"),
			"amount": 1
		}
	]
	}).id('pcompatgeneral:13')

	event.custom({
		"type": "modern_industrialization:assembler",
		"item_outputs": {
		"item":"moderndynamics:fluid_pipe",
		"amount": 16
		},
		"duration": 100,
		"eu": 8,
		"item_inputs": [{
			"item" : ("modern_industrialization:steel_curved_plate"),
			"amount": 6
		},
		{
			"item" : ("modern_industrialization:tin_rotor"),
			"amount": 3
		},
		{
			"tag" : ("c:glass_blocks"),
			"amount": 3
		},
		{
			"item" : ("modern_industrialization:copper_dust"),
			"amount": 1
		}
	]
	}).id('pcompatgeneral:14')

	event.recipes.modern_industrialization.compressor(4, 50)
	.itemIn("48x dml-refabricated:soot_redstone")
	.itemOut("tis3d:prism")
	.id('pcompatgeneral:15')

	event.custom({
		"type": "modern_industrialization:assembler",
		"item_outputs": {
		"item":"tis3d:casing",
		"amount": 8
		},
		"duration": 100,
		"eu": 8,
		"item_inputs": [{
			"item" : ("dml-refabricated:machine_casing"),
			"amount": 8
		},
		{
			"item" : ("modern_industrialization:analog_circuit"),
			"amount": 2
		},
		{
			"item" : ("modern_industrialization:redstone_battery"),
			"amount": 3
		},
		{
			"item" : ("modern_industrialization:desh_ingot"),
			"amount": 8
		}
	]
	}).id('pcompatgeneral:16')

	event.custom({
		"type": "modern_industrialization:assembler",
		"item_outputs": {
		"item":"tis3d:controller",
		"amount": 4
		},
		"duration": 100,
		"eu": 8,
		"item_inputs": [{
			"item" : ("modern_industrialization:advanced_machine_casing"),
			"amount": 4
		},
		{
			"item" : ("modern_industrialization:analog_circuit"),
			"amount": 4
		},
		{
			"item" : ("tis3d:prism"),
			"amount": 4
		},
		{
			"item" : ("modern_industrialization:ostrum_ingot"),
			"amount": 8
		}
	]
	}).id('pcompatgeneral:17')

	event.recipes.modern_industrialization.assembler(8, 50)
	.itemIn("ae2:printed_calculation_processor")
	.itemIn("modern_industrialization:analog_circuit")
	.itemIn("ae2:printed_silicon")
	.fluidIn("modern_industrialization:molten_redstone", 100)
	.itemOut("ae2:calculation_processor")
	.id('pcompatgeneral:18')

	event.recipes.modern_industrialization.assembler(8, 50)
	.itemIn("ae2:printed_logic_processor")
	.itemIn("modern_industrialization:analog_circuit")
	.itemIn("ae2:printed_silicon")
	.fluidIn("modern_industrialization:molten_redstone", 100)
	.itemOut("ae2:logic_processor")
	.id('pcompatgeneral:19')

	event.recipes.modern_industrialization.assembler(8, 50)
	.itemIn("ae2:printed_engineering_processor")
	.itemIn("modern_industrialization:analog_circuit")
	.itemIn("ae2:printed_silicon")
	.fluidIn("modern_industrialization:molten_redstone", 100)
	.itemOut("ae2:engineering_processor")
	.id('pcompatgeneral:20')


	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:oak_sapling")
	.itemOut("16x minecraft:oak_log")
	.itemOut("2x minecraft:oak_sapling")
	.itemOut("2x minecraft:apple")
	.id('pcompatgreenhouse:1')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:spruce_sapling")
	.itemOut("16x minecraft:spruce_log")
	.itemOut("2x minecraft:spruce_sapling")
	.id('pcompatgreenhouse:30')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:jungle_sapling")
	.itemOut("16x minecraft:jungle_log")
	.itemOut("2x minecraft:jungle_sapling")
	.id('pcompatgreenhouse:31')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:birch_sapling")
	.itemOut("16x minecraft:birch_log")
	.itemOut("2x minecraft:birch_sapling")
	.id('pcompatgreenhouse:32')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:acacia_sapling")
	.itemOut("16x minecraft:acacia_log")
	.itemOut("2x minecraft:acacia_sapling")
	.id('pcompatgreenhouse:33')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:dark_oak_sapling")
	.itemOut("16x minecraft:dark_oak_log")
	.itemOut("2x minecraft:dark_oak_sapling")
	.itemOut("2x minecraft:apple")
	.id('pcompatgreenhouse:34')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:juniper_sapling")
	.itemOut("16x bewitchment:juniper_log")
	.itemOut("2x bewitchment:juniper_sapling")
	.id('pcompatgreenhouse:35')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:cypress_sapling")
	.itemOut("16x bewitchment:cypress_log")
	.itemOut("2x bewitchment:cypress_sapling")
	.id('pcompatgreenhouse:36')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:elder_sapling")
	.itemOut("16x bewitchment:elder_log")
	.itemOut("2x bewitchment:elder_sapling")
	.id('pcompatgreenhouse:37')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:dragons_blood_sapling")
	.itemOut("16x bewitchment:dragons_blood_log")
	.itemOut("2x bewitchment:dragons_blood_sapling")
	.id('pcompatgreenhouse:38')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bwplus:yew_sapling")
	.itemOut("16x bwplus:yew_log")
	.itemOut("2x bwplus:yew_sapling")
	.id('pcompatgreenhouse:39')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("charm:ebony_sapling")
	.itemOut("16x charm:ebony_log")
	.itemOut("2x charm:ebony_sapling")
	.id('pcompatgreenhouse:40')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("ecologics:walnut_sapling")
	.itemOut("16x ecologics:walnut_log")
	.itemOut("2x ecologics:walnut_sapling")
	.itemOut("2x ecologics:walnut")
	.id('pcompatgreenhouse:41')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:twilight_oak_sapling")
	.itemOut("16x twilightforest:twilight_oak_log")
	.itemOut("2x twilightforest:twilight_oak_sapling")
	.id('pcompatgreenhouse:42')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:canopy_sapling")
	.itemOut("16x twilightforest:canopy_log")
	.itemOut("2x twilightforest:canopy_sapling")
	.id('pcompatgreenhouse:43')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:mangrove_sapling")
	.itemOut("16x twilightforest:mangrove_log")
	.itemOut("2x twilightforest:mangrove_sapling")
	.id('pcompatgreenhouse:44')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:darkwood_sapling")
	.itemOut("16x twilightforest:dark_log")
	.itemOut("2x twilightforest:darkwood_sapling")
	.id('pcompatgreenhouse:45')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:hollow_oak_sapling")
	.itemOut("16x twilightforest:twilight_oak_log")
	.itemOut("2x twilightforest:hollow_oak_sapling")
	.id('pcompatgreenhouse:46')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("twilightforest:rainbow_oak_sapling")
	.itemOut("16x twilightforest:twilight_oak_log")
	.itemOut("2x twilightforest:rainbow_oak_sapling")
	.id('pcompatgreenhouse:47')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:mangrove_propagule")
	.itemOut("16x minecraft:mangrove_log")
	.itemOut("8x minecraft:mangrove_roots")
	.itemOut("2x minecraft:mangrove_propagule")
	.id('pcompatgreenhouse:48')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("ecologics:coconut_seedling")
	.itemOut("16x ecologics:coconut_log")
	.itemOut("2x ecologics:coconut_seedling")
	.itemOut("4x ecologics:coconut")
	.id('pcompatgreenhouse:49')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("farmersdelight:cabbage_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x farmersdelight:cabbage")
	.itemOut("2x farmersdelight:cabbage_seeds")
	.id('pcompatgreenhouse:50')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("farmersdelight:tomato_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x farmersdelight:tomato")
	.itemOut("2x farmersdelight:tomato_seeds")
	.id('pcompatgreenhouse:51')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("farmersdelight:onion")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("4x farmersdelight:onion")
	.id('pcompatgreenhouse:52')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.fluidIn("minecraft:water", 250)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("farmersdelight:rice")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("3x farmersdelight:rice")
	.itemOut("1x farmersdelight:straw")
	.id('pcompatgreenhouse:53')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("supplementaries:flax_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x supplementaries:flax")
	.itemOut("2x supplementaries:flax_seeds")
	.id('pcompatgreenhouse:54')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:wheat_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x minecraft:wheat")
	.itemOut("2x minecraft:wheat_seeds")
	.id('pcompatgreenhouse:55')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:pumpkin_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x minecraft:pumpkin")
	.itemOut("2x minecraft:pumpkin_seeds")
	.id('pcompatgreenhouse:56')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:melon_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x minecraft:melon")
	.itemOut("2x minecraft:melon_seeds")
	.id('pcompatgreenhouse:57')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.fluidIn("minecraft:water", 250)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:kelp")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("3x minecraft:kelp")
	.id('pcompatgreenhouse:58')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:cactus")
	.itemIn("minecraft:sand", 0)
	.itemOut("5x minecraft:cactus")
	.id('pcompatgreenhouse:59')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:sugar_cane")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("5x minecraft:sugar_cane")
	.id('pcompatgreenhouse:60')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:bamboo")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("5x minecraft:bamboo")
	.id('pcompatgreenhouse:61')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:beetroot_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x minecraft:beetroot")
	.itemOut("2x minecraft:beetroot_seeds")
	.id('pcompatgreenhouse:62')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:sweet_berries")
	.itemIn("minecraft:vine", 0)
	.itemOut("5x minecraft:sweet_berries")
	.id('pcompatgreenhouse:63')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("minecraft:glow_berries")
	.itemIn("minecraft:vine", 0)
	.itemOut("5x minecraft:glow_berries")
	.id('pcompatgreenhouse:64')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:witchberry")
	.itemIn("bewitchment:fruiting_bramble", 0)
	.itemOut("5x bewitchment:witchberry")
	.id('pcompatgreenhouse:65')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("ecologics:prickly_pear")
	.itemIn("minecraft:cactus", 0)
	.itemOut("5x ecologics:prickly_pear")
	.id('pcompatgreenhouse:66')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bwplus:dragonfruit")
	.itemIn("minecraft:vine", 0)
	.itemOut("5x bwplus:dragonfruit")
	.id('pcompatgreenhouse:67')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:garlic")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("5x bewitchment:garlic")
	.id('pcompatgreenhouse:68')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:aconite_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x bewitchment:aconite")
	.itemOut("2x bewitchment:aconite_seeds")
	.id('pcompatgreenhouse:69')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:belladonna_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x bewitchment:belladonna")
	.itemOut("2x bewitchment:belladonna_seeds")
	.id('pcompatgreenhouse:70')

	event.recipes.modern_industrialization.greenhouse(64, 100)
	.itemIn("2x farmingforblockheads:green_fertilizer")
	.itemIn("bewitchment:mandrake_seeds")
	.itemIn("farmersdelight:rich_soil", 0)
	.itemOut("2x bewitchment:mandrake_root")
	.itemOut("2x bewitchment:mandrake_seeds")
	.id('pcompatgreenhouse:71')
})