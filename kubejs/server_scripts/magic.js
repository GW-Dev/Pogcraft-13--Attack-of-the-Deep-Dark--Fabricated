// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	event.shaped("2x bewitchment:salt", [["modern_industrialization:salt_dust"],["modern_industrialization:salt_dust"]]);

	event.shaped('miskatonicmysteries:rifle', [
		'  S',
		'PI ',
		'PS '
	  ], {
		S: 'minecraft:stick',
		P: 'modern_industrialization:steel_plate',
		I: 'miskatonicmysteries:revolver'
	})
	//MM altar recipes

	event.replaceInput({id: 'miskatonicmysteries:crafting/chemistry_set'}, 'minecraft:iron_nugget', 'bewitchment:brazier')
	event.replaceInput({id: 'miskatonicmysteries:crafting/altars/blackstone_altar'}, 'minecraft:blackstone', 'bewitchment:blackstone_witch_altar')
	event.replaceInput({id: 'miskatonicmysteries:crafting/altars/stone_altar'}, 'minecraft:stone', 'bewitchment:stone_witch_altar')
	event.replaceInput({id: 'miskatonicmysteries:crafting/altars/mossy_stone_altar'}, 'minecraft:mossy_cobblestone', 'bewitchment:mossy_cobblestone_witch_altar')
	event.replaceInput({id: 'miskatonicmysteries:crafting/altars/funky_altar'}, 'minecraft:purpur_block', 'bewitchment:purpur_witch_altar')
	event.replaceInput({id: 'miskatonicmysteries:crafting/altars/nether_brick_altar'}, 'minecraft:nether_bricks', 'bewitchment:nether_brick_witch_altar')
	event.replaceInput({id: 'miskatonicmysteries:crafting/altars/prismarine_altar'}, 'minecraft:prismarine_bricks', 'bewitchment:prismarine_witch_altar')
	event.replaceInput({id: 'miskatonicmysteries:crafting/altars/sandstone_altar'}, 'minecraft:sandstone', 'bewitchment:end_stone_witch_altar')
	event.replaceInput({id: 'miskatonicmysteries:crafting/altars/deepslate_altar'}, 'minecraft:deepslate', 'bewitchment:obsidian_witch_altar')
	event.replaceInput({id: 'miskatonicmysteries:crafting/altars/coral_altar'}, '#minecraft:dead_coral_blocks', 'bewitchment:golden_witch_altar')

	const recipes = [
		{
		  output: 'bewitchment:dragons_blood_broom',
		  pattern: [' C ', 'EBF', 'DAD'],
		  key: {
			A: 'bewitchment:demon_heart',
			B: 'bewitchment:heaven_extract',
			C: 'minecraft:elytra',
			D: 'bewitchment:dragons_blood_sapling',
			E: 'reaper:rune_velocitas',
			F: 'twilightforest:raven_feather',
		},
		  id: 'bewitchment:dragons_blood_broom'
		},
		
		{
		  output: 'bewitchment:juniper_broom',
		  pattern: [' C ', 'EBF', 'DAD'],
		  key: {
			A: 'bewitchment:demon_heart',
			B: 'bewitchment:heaven_extract',
			C: 'minecraft:elytra',
			D: 'bewitchment:juniper_sapling',
			E: 'reaper:rune_velocitas',
			F: 'twilightforest:raven_feather',
		},
		  id: 'bewitchment:juniper_broom'
		},
		
		{
		  output: 'bewitchment:cypress_broom',
		  pattern: [' C ', 'EBF', 'DAD'],
		  key: {
			A: 'bewitchment:demon_heart',
			B: 'bewitchment:heaven_extract',
			C: 'minecraft:elytra',
			D: 'bewitchment:cypress_sapling',
			E: 'reaper:rune_velocitas',
			F: 'twilightforest:raven_feather',
		},
		  id: 'bewitchment:cypress_broom'
		},
		
		{
		  output: 'bewitchment:elder_broom',
		  pattern: [' C ', 'EBF', 'DAD'],
		  key: {
			A: 'bewitchment:demon_heart',
			B: 'bewitchment:heaven_extract',
			C: 'minecraft:elytra',
			D: 'bewitchment:elder_sapling',
			E: 'reaper:rune_velocitas',
			F: 'twilightforest:raven_feather',
		},
		  id: 'bewitchment:elder_broom'
		},

		{
			output: 'bwplus:yew_broom',
			pattern: [' C ', 'EBF', 'DAD'],
			key: {
			  A: 'bewitchment:demon_heart',
			  B: 'bewitchment:heaven_extract',
			  C: 'minecraft:elytra',
			  D: 'bwplus:yew_sapling',
			  E: 'reaper:rune_velocitas',
			  F: 'twilightforest:raven_feather',
		  },
			id: 'bwplus:yew_broom'
		  }
		];
		
		recipes.forEach((recipe) => {
		event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
		});

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

	event.custom({
		"type": "modern_industrialization:blast_furnace",
		"duration": 100,
		"eu": 64,
		"item_inputs": [
			{
			"item" : ("modern_industrialization:gold_double_ingot"),
			"amount": 1
		},  {
			"item" : ("miskatonicmysteries:iridescent_pearl"),
			"amount": 1
			}
		],
		"fluid_inputs": {
			"fluid": 'modern_industrialization:molten_redstone',
			"amount": 1000
		},
		"item_outputs": {
			"item":"miskatonicmysteries:oceanic_gold",
			"amount": 2
		}
	}).id('p8:26')
})