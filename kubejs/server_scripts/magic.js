// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	event.shaped("2x bewitchment:salt", [["modern_industrialization:salt_dust"],["modern_industrialization:salt_dust"]]);

	event.recipes.modern_industrialization.macerator(2, 200)
	.itemIn("#c:silver_ores")
	.itemOut("3x #c:raw_silver_ores")

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
	}).id('pm:1')

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
	}).id('pm:2')

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
	}).id('pm:3')

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
	}).id('pm:4')

	event.custom({
		"type": "modern_industrialization:unpacker",
		"item_outputs": {
		"item":"spectrum:onyx_shard",
		"amount": 4
		},
		"duration": 10,
		"eu": 2,
		"item_inputs": {
			"item" : ("spectrum:onyx_block"),
			"amount": 1
		}
	}).id('pm:5')

	event.recipes.modern_industrialization.chemical_reactor(32, 50)
	.itemIn("4x modern_industrialization:quartz_crushed_dust")
	.itemIn("modern_industrialization:iron_tiny_dust")
	.fluidIn("modern_industrialization:oxygen", 250)
	.itemOut("8x spectrum:citrine_shard")
	.id('pm:6')

	event.recipes.modern_industrialization.chemical_reactor(32, 50)
	.itemIn("4x minecraft:calcite")
	.itemIn("2x modern_industrialization:iron_tiny_dust")
	.fluidIn("modern_industrialization:oxygen", 250)
	.itemOut("8x spectrum:onyx_shard")
	.id('pm:7')

	event.recipes.modern_industrialization.chemical_reactor(32, 50)
	.itemIn("2x modern_industrialization:aluminum_tiny_dust")
	.itemIn("modern_industrialization:quartz_crushed_dust")
	.fluidIn("minecraft:water", 1000)
	.fluidIn("modern_industrialization:sodium_hydroxide", 2000)
	.fluidIn("modern_industrialization:sulfuric_acid", 1500)
	.fluidOut("modern_industrialization:hydrogen", 2500)
	.itemOut("32x spectrum:topaz_shard")
	.itemOut("modern_industrialization:sodium_dust")
	.id('pm:8')

	event.recipes.modern_industrialization.chemical_reactor(32, 50)
	.itemIn("8x modern_industrialization:copper_dust")
	.itemIn("modern_industrialization:carbon_dust")
	.fluidIn("minecraft:oxygen", 1000)
	.fluidIn("modern_industrialization:sodium_hydroxide", 2000)
	.itemOut("32x spectrum:raw_azurite")
	.id('pm:9')

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
	}).id('pmm:1')

	event.recipes.modern_industrialization.chemical_reactor(64, 100)
	.itemIn("2x minecraft:ender_pearl")
	.itemIn("minecraft:prismarine_crystals")
	.itemIn("2x minecraft:glowstone_dust")
	.fluidIn("modern_industrialization:sugar_solution", 500)
	.fluidIn("modern_industrialization:plant_oil", 1000)
	.itemOut("4x miskatonicmysteries:iridescent_pearl")
	.id('pmm:2')

	event.custom({
		"type": "spirit:soul_engulfing",
		"input": {
		"ingredient": {
		"item":"botania:livingrock",
		}
		},
		"duration": 5,
		"destroysStructure": false,
		"outputItem": "spirit:soul_slate"
	})

	event.custom({
		"type": "spirit:soul_engulfing",
		"input": {
		  "ingredient": {
			"item": "modern_industrialization:steel_ingot"
		  },
		  "multiblock": {
			"pattern": [
			  [
				"   ",
				" @ ",
				"   "
			  ],
			  [
				" S ",
				"S&S",
				" S "
			  ]
			],
			"keys": {
			  "S": {
				"block": "spirit:soul_powder_block"
			  }
			}
		  }
		},
		"duration": 60,
		"outputItem": "spirit:soul_steel_ingot"
	})

	event.custom({
		"type": "spirit:soul_engulfing",
		"input": {
			"ingredient": {
			"item": "botania:pixie_dust"
			}
		},
		"duration": 2,
		"destroysStructure": false,
		"outputItem": "spirit:soul_powder",
		"outputAmount": 2
	})

	event.custom({
		"type": "spirit:soul_engulfing",
		"input": {
		  "ingredient": {
			"item": "modern_industrialization:steel_block"
		  },
		  "multiblock": {
			"pattern": [
			  [
				"   ",
				" @ ",
				"   "
			  ],
			  [
				" S ",
				"SXS",
				" S "
			  ]
			],
			"keys": {
			  "S": {
				"block": "spirit:compressed_soul_powder_block"
			  },
			  "X": {
				"block": "spirit:compressed_soul_sand"
			  }
			}
		  }
		},
		"duration": 60,
		"outputItem": "spirit:soul_steel_block"
	})
	
})