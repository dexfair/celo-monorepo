# Class: StableTokenWrapper

Stable token with variable supply (cUSD)

## Hierarchy

* [BaseWrapper](_wrappers_basewrapper_.basewrapper.md)‹StableToken›

  ↳ **StableTokenWrapper**

## Index

### Constructors

* [constructor](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#constructor)

### Properties

* [allowance](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#allowance)
* [approve](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#approve)
* [balanceOf](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#balanceof)
* [burn](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#burn)
* [decimals](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#decimals)
* [decreaseAllowance](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#decreaseallowance)
* [eventTypes](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#eventtypes)
* [events](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#events)
* [increaseAllowance](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#increaseallowance)
* [methodIds](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#methodids)
* [mint](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#mint)
* [name](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#name)
* [owner](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#owner)
* [setInflationParameters](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#setinflationparameters)
* [symbol](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#symbol)
* [totalSupply](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#totalsupply)
* [transfer](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#transfer)
* [transferFrom](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#transferfrom)
* [transferWithComment](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#transferwithcomment)
* [unitsToValue](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#unitstovalue)
* [valueToUnits](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#valuetounits)

### Accessors

* [address](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#address)

### Methods

* [getConfig](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#getconfig)
* [getHumanReadableConfig](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#gethumanreadableconfig)
* [getInflationParameters](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#getinflationparameters)
* [getPastEvents](_wrappers_stabletokenwrapper_.stabletokenwrapper.md#getpastevents)

## Constructors

###  constructor

\+ **new StableTokenWrapper**(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: StableToken): *[StableTokenWrapper](_wrappers_stabletokenwrapper_.stabletokenwrapper.md)*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[constructor](_wrappers_basewrapper_.basewrapper.md#constructor)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:26](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_kit_.contractkit.md) |
`contract` | StableToken |

**Returns:** *[StableTokenWrapper](_wrappers_stabletokenwrapper_.stabletokenwrapper.md)*

## Properties

###  allowance

• **allowance**: *function* = proxyCall(this.contract.methods.allowance, undefined, valueToBigNumber)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:42](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L42)*

Gets the amount of owner's StableToken allowed to be spent by spender.

**`param`** The owner of the StableToken.

**`param`** The spender of the StableToken.

**`returns`** The amount of StableToken owner is allowing spender to spend.

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  approve

• **approve**: *function* = proxySend(
    this.kit,
    this.contract.methods.approve
  )

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:181](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L181)*

Approve a user to transfer StableToken on behalf of another user.

**`param`** The address which is being approved to spend StableToken.

**`param`** The amount of StableToken approved to the spender.

**`returns`** True if the transaction succeeds.

#### Type declaration:

▸ (`spender`: string, `value`: string | number): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`spender` | string |
`value` | string &#124; number |

___

###  balanceOf

• **balanceOf**: *function* = proxyCall(
    this.contract.methods.balanceOf,
    undefined,
    valueToBigNumber
  )

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:70](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L70)*

Gets the balance of the specified address using the presently stored inflation factor.

**`param`** The address to query the balance of.

**`returns`** The balance of the specified address.

#### Type declaration:

▸ (`owner`: string): *Promise‹BigNumber›*

**Parameters:**

Name | Type |
------ | ------ |
`owner` | string |

___

###  burn

• **burn**: *function* = proxySend(this.kit, this.contract.methods.burn)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:121](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L121)*

#### Type declaration:

▸ (...`args`: InputArgs): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  decimals

• **decimals**: *function* = proxyCall(this.contract.methods.decimals, undefined, valueToInt)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:57](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L57)*

**`returns`** The number of decimal places to which StableToken is divisible.

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  decreaseAllowance

• **decreaseAllowance**: *function* = proxySend(this.kit, this.contract.methods.decreaseAllowance)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:119](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L119)*

Decreases the allowance of another user.

**`param`** The address which is being approved to spend StableToken.

**`param`** The decrement of the amount of StableToken approved to the spender.

**`returns`** true if success.

#### Type declaration:

▸ (...`args`: InputArgs): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  eventTypes

• **eventTypes**: *EventsEnum‹T›* = Object.keys(this.events).reduce<EventsEnum<T>>(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as any
  )

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[eventTypes](_wrappers_basewrapper_.basewrapper.md#eventtypes)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:42](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L42)*

___

###  events

• **events**: *StableToken["events"]* = this.contract.events

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[events](_wrappers_basewrapper_.basewrapper.md#events)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:40](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L40)*

___

###  increaseAllowance

• **increaseAllowance**: *function* = proxySend(
    this.kit,
    this.contract.methods.increaseAllowance,
    tupleParser(stringIdentity, valueToString)
  )

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:108](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L108)*

Increases the allowance of another user.

**`param`** The address which is being approved to spend StableToken.

**`param`** The increment of the amount of StableToken approved to the spender.

**`returns`** true if success.

#### Type declaration:

▸ (...`args`: InputArgs): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  methodIds

• **methodIds**: *Record‹keyof T["methods"], string›* = Object.keys(this.contract.methods).reduce<Record<Methods<T>, string>>(
    (acc, method: Methods<T>) => {
      const methodABI = this.contract.options.jsonInterface.find((item) => item.name === method)

      acc[method] =
        methodABI === undefined ? '0x' : this.kit.web3.eth.abi.encodeFunctionSignature(methodABI)

      return acc
    },
    {} as any
  )

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[methodIds](_wrappers_basewrapper_.basewrapper.md#methodids)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:47](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L47)*

___

###  mint

• **mint**: *function* = proxySend(this.kit, this.contract.methods.mint)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:120](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L120)*

#### Type declaration:

▸ (...`args`: InputArgs): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  name

• **name**: *function* = proxyCall(this.contract.methods.name)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:47](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L47)*

**`returns`** The name of the stable token.

#### Type declaration:

▸ (): *Promise‹string›*

___

###  owner

• **owner**: *function* = proxyCall(this.contract.methods.owner)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:76](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L76)*

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  setInflationParameters

• **setInflationParameters**: *function* = proxySend(this.kit, this.contract.methods.setInflationParameters)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:123](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L123)*

#### Type declaration:

▸ (...`args`: InputArgs): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  symbol

• **symbol**: *function* = proxyCall(this.contract.methods.symbol)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:52](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L52)*

**`returns`** The symbol of the stable token.

#### Type declaration:

▸ (): *Promise‹string›*

___

###  totalSupply

• **totalSupply**: *function* = proxyCall(this.contract.methods.totalSupply, undefined, valueToBigNumber)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:63](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L63)*

Returns the total supply of the token, that is, the amount of tokens currently minted.

**`returns`** Total supply.

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  transfer

• **transfer**: *function* = proxySend(
    this.kit,
    this.contract.methods.transfer
  )

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:208](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L208)*

Transfers `value` from `msg.sender` to `to`

**`param`** The address to transfer to.

**`param`** The amount to be transferred.

#### Type declaration:

▸ (`to`: string, `value`: string | number): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`to` | string |
`value` | string &#124; number |

___

###  transferFrom

• **transferFrom**: *function* = proxySend(this.kit, this.contract.methods.transferFrom)

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:220](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L220)*

Transfers StableToken from one address to another on behalf of a user.

**`param`** The address to transfer StableToken from.

**`param`** The address to transfer StableToken to.

**`param`** The amount of StableToken to transfer.

**`returns`** True if the transaction succeeds.

#### Type declaration:

▸ (`from`: string, `to`: string, `value`: string | number): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`from` | string |
`to` | string |
`value` | string &#124; number |

___

###  transferWithComment

• **transferWithComment**: *function* = proxySend(
    this.kit,
    this.contract.methods.transferWithComment
  )

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:193](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L193)*

Transfer token for a specified address

**`param`** The address to transfer to.

**`param`** The amount to be transferred.

**`param`** The transfer comment.

**`returns`** True if the transaction succeeds.

#### Type declaration:

▸ (`to`: string, `value`: string | number, `comment`: string): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`to` | string |
`value` | string &#124; number |
`comment` | string |

___

###  unitsToValue

• **unitsToValue**: *function* = proxyCall(
    this.contract.methods.unitsToValue,
    tupleParser(valueToString),
    valueToBigNumber
  )

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:96](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L96)*

Returns the value of a given number of units given the current inflation factor.

**`param`** The units to convert to value.

**`returns`** The value corresponding to `units` given the current inflation factor.

#### Type declaration:

▸ (`units`: BigNumber.Value): *Promise‹BigNumber›*

**Parameters:**

Name | Type |
------ | ------ |
`units` | BigNumber.Value |

___

###  valueToUnits

• **valueToUnits**: *function* = proxyCall(
    this.contract.methods.valueToUnits,
    tupleParser(valueToString),
    valueToBigNumber
  )

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:85](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L85)*

Returns the units for a given value given the current inflation factor.

**`param`** The value to convert to units.

**`returns`** The units corresponding to `value` given the current inflation factor.

**`dev`** We don't compute the updated inflationFactor here because
we assume any function calling this will have updated the inflation factor.

#### Type declaration:

▸ (`value`: BigNumber.Value): *Promise‹BigNumber›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | BigNumber.Value |

## Accessors

###  address

• **get address**(): *string*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[address](_wrappers_basewrapper_.basewrapper.md#address)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:30](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L30)*

Contract address

**Returns:** *string*

## Methods

###  getConfig

▸ **getConfig**(): *Promise‹[StableTokenConfig](../interfaces/_wrappers_stabletokenwrapper_.stabletokenconfig.md)›*

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:142](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L142)*

Returns current configuration parameters.

**Returns:** *Promise‹[StableTokenConfig](../interfaces/_wrappers_stabletokenwrapper_.stabletokenconfig.md)›*

___

###  getHumanReadableConfig

▸ **getHumanReadableConfig**(): *Promise‹object›*

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:161](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L161)*

**`dev`** Returns human readable configuration of the stabletoken contract

**Returns:** *Promise‹object›*

StableTokenConfig object

___

###  getInflationParameters

▸ **getInflationParameters**(): *Promise‹[InflationParameters](../interfaces/_wrappers_stabletokenwrapper_.inflationparameters.md)›*

*Defined in [packages/contractkit/src/wrappers/StableTokenWrapper.ts:129](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/StableTokenWrapper.ts#L129)*

Querying the inflation parameters.

**Returns:** *Promise‹[InflationParameters](../interfaces/_wrappers_stabletokenwrapper_.inflationparameters.md)›*

Inflation rate, inflation factor, inflation update period and the last time factor was updated.

___

###  getPastEvents

▸ **getPastEvents**(`event`: Events‹StableToken›, `options`: PastEventOptions): *Promise‹EventLog[]›*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[getPastEvents](_wrappers_basewrapper_.basewrapper.md#getpastevents)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:36](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L36)*

Contract getPastEvents

**Parameters:**

Name | Type |
------ | ------ |
`event` | Events‹StableToken› |
`options` | PastEventOptions |

**Returns:** *Promise‹EventLog[]›*
