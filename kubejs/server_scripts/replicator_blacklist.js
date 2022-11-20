////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    const replicator = [
        'kibe:tank',
        'kibe:angel_ring',
        'ae2:quantum_entangled_singularity',
        'ae2:spatial_storage_cell_2',
        'ae2:spatial_storage_cell_16',
        'ae2:spatial_storage_cell_128',
        'ae2:sky_stone_tank',
        'ae2:portable_item_cell_1k',
        'ae2:portable_item_cell_4k',
        'ae2:portable_item_cell_16k',
        'ae2:portable_item_cell_64k',
        'ae2:portable_item_cell_256k',
        'ae2:portable_fluid_cell_1k',
        'ae2:portable_fluid_cell_4k',
        'ae2:portable_fluid_cell_16k',
        'ae2:portable_fluid_cell_64k',
        'ae2:portable_fluid_cell_256k',
        'ae2:item_storage_cell_1k',
        'ae2:item_storage_cell_4k',
        'ae2:item_storage_cell_16k',
        'ae2:item_storage_cell_64k',
        'ae2:item_storage_cell_256k',
        'ae2:fluid_storage_cell_1k',
        'ae2:fluid_storage_cell_4k',
        'ae2:fluid_storage_cell_16k',
        'ae2:fluid_storage_cell_64k',
        'ae2:fluid_storage_cell_256k',
        'dankstorage:dank_1',
        'dankstorage:dank_2',
        'dankstorage:dank_3',
        'dankstorage:dank_4',
        'dankstorage:dank_5',
        'dankstorage:dank_6',
        'dankstorage:dank_7',
        'minecraft:dragon_egg',
        'kibe:golden_lasso',
        'kibe:cursed_lasso',
        'kibe:diamond_lasso',
        'gofish:wooden_crate',
        'gofish:iron_crate',
        'gofish:golden_crate',
        'gofish:diamond_crate',
        'gofish:frosted_crate',
        'gofish:slimey_crate',
        'gofish:supply_crate',
        'gofish:fiery_crate',
        'gofish:soul_crate',
        'gofish:end_crate',
        'gofish:astral_crate',
        'gofish:gilded_blackstone_crate',
        'modern_industrialization:quantum_helmet',
        'modern_industrialization:quantum_chestplate',
        'modern_industrialization:quantum_leggings',
        'modern_industrialization:quantum_boots',
        'modern_industrialization:quantum_sword',
        'modern_industrialization:singularity',
    ];

    replicator.forEach((item) => {
        event.add('modern_industrialization:replicator_blacklist', item)
    });

});
