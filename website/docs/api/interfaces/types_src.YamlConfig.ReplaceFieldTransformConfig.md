---
title: 'ReplaceFieldTransformConfig'
---

# Interface: ReplaceFieldTransformConfig

[types/src](../modules/types_src).[YamlConfig](../modules/types_src.YamlConfig).ReplaceFieldTransformConfig

Transformer to replace GraphQL field with partial of full config from a different field

## Table of contents

### Properties

- [replacements](types_src.YamlConfig.ReplaceFieldTransformConfig#replacements)
- [typeDefs](types_src.YamlConfig.ReplaceFieldTransformConfig#typedefs)

## Properties

### replacements

• **replacements**: [`ReplaceFieldTransformObject`](types_src.YamlConfig.ReplaceFieldTransformObject)[]

Array of rules to replace fields

#### Defined in

[packages/types/src/config.ts:1513](https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1513)

___

### typeDefs

• `Optional` **typeDefs**: `any`

Additional type definition to used to replace field types

#### Defined in

[packages/types/src/config.ts:1509](https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1509)
