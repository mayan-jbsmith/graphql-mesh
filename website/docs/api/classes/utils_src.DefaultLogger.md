---
title: 'DefaultLogger'
---

# Class: DefaultLogger

[utils/src](../modules/utils_src).DefaultLogger

## Implements

- [`Logger`](../modules/types_src#logger)

## Table of contents

### Constructors

- [constructor](utils_src.DefaultLogger#constructor)

### Properties

- [name](utils_src.DefaultLogger#name)

### Methods

- [child](utils_src.DefaultLogger#child)
- [debug](utils_src.DefaultLogger#debug)
- [error](utils_src.DefaultLogger#error)
- [info](utils_src.DefaultLogger#info)
- [log](utils_src.DefaultLogger#log)
- [warn](utils_src.DefaultLogger#warn)

## Constructors

### constructor

• **new DefaultLogger**(`name?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Defined in

[packages/utils/src/logger.ts:20](https://github.com/Urigo/graphql-mesh/blob/master/packages/utils/src/logger.ts#L20)

## Properties

### name

• `Optional` **name**: `string`

#### Implementation of

Logger.name

## Methods

### child

▸ **child**(`name`): [`Logger`](../modules/types_src#logger)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Logger`](../modules/types_src#logger)

#### Implementation of

Logger.child

#### Defined in

[packages/utils/src/logger.ts:45](https://github.com/Urigo/graphql-mesh/blob/master/packages/utils/src/logger.ts#L45)

___

### debug

▸ **debug**(`lazyMessage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lazyMessage` | [`LazyLoggerMessage`](../modules/types_src#lazyloggermessage) |

#### Returns

`void`

#### Implementation of

Logger.debug

#### Defined in

[packages/utils/src/logger.ts:38](https://github.com/Urigo/graphql-mesh/blob/master/packages/utils/src/logger.ts#L38)

___

### error

▸ **error**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

Logger.error

#### Defined in

[packages/utils/src/logger.ts:34](https://github.com/Urigo/graphql-mesh/blob/master/packages/utils/src/logger.ts#L34)

___

### info

▸ **info**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

Logger.info

#### Defined in

[packages/utils/src/logger.ts:30](https://github.com/Urigo/graphql-mesh/blob/master/packages/utils/src/logger.ts#L30)

___

### log

▸ **log**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

Logger.log

#### Defined in

[packages/utils/src/logger.ts:21](https://github.com/Urigo/graphql-mesh/blob/master/packages/utils/src/logger.ts#L21)

___

### warn

▸ **warn**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

Logger.warn

#### Defined in

[packages/utils/src/logger.ts:26](https://github.com/Urigo/graphql-mesh/blob/master/packages/utils/src/logger.ts#L26)
