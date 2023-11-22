import {
  getContract,
  GetContractArgs,
  readContract,
  ReadContractConfig,
  writeContract,
  WriteContractArgs,
  WriteContractPreparedArgs,
  WriteContractUnpreparedArgs,
  prepareWriteContract,
  PrepareWriteContractConfig,
  WriteContractMode,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721PermitABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1271
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1271ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: 'magicValue', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20PermitAllowed
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitAllowedABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'holder', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'allowed', internalType: 'bool', type: 'bool' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721PermitABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticallABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INonfungiblePositionManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iNonfungiblePositionManagerABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: false },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Collect',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'DecreaseLiquidity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'IncreaseLiquidity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'WETH9',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct INonfungiblePositionManager.CollectParams',
        type: 'tuple',
        components: [
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'amount0Max', internalType: 'uint128', type: 'uint128' },
          { name: 'amount1Max', internalType: 'uint128', type: 'uint128' },
        ],
      },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'createAndInitializePoolIfNecessary',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct INonfungiblePositionManager.DecreaseLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
          { name: 'amount0Min', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Min', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'decreaseLiquidity',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct INonfungiblePositionManager.IncreaseLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'amount0Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount0Min', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Min', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'increaseLiquidity',
    outputs: [
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct INonfungiblePositionManager.MintParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'amount0Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount0Min', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Min', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'mint',
    outputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'positions',
    outputs: [
      { name: 'nonce', internalType: 'uint96', type: 'uint96' },
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'feeGrowthInside0LastX128', internalType: 'uint256', type: 'uint256' },
      { name: 'feeGrowthInside1LastX128', internalType: 'uint256', type: 'uint256' },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
    ],
  },
  { stateMutability: 'payable', type: 'function', inputs: [], name: 'refundETH', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INonfungibleTokenPositionDescriptor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iNonfungibleTokenPositionDescriptorABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'positionManager', internalType: 'contract INonfungiblePositionManager', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPeripheryImmutableState
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPeripheryImmutableStateABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'WETH9',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPeripheryPayments
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPeripheryPaymentsABI = [
  { stateMutability: 'payable', type: 'function', inputs: [], name: 'refundETH', outputs: [] },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPeripheryPaymentsWithFee
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPeripheryPaymentsWithFeeABI = [
  { stateMutability: 'payable', type: 'function', inputs: [], name: 'refundETH', outputs: [] },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'feeBips', internalType: 'uint256', type: 'uint256' },
      { name: 'feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenWithFee',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'feeBips', internalType: 'uint256', type: 'uint256' },
      { name: 'feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9WithFee',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPoolInitializer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPoolInitializerABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'createAndInitializePoolIfNecessary',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuoter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuoterABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quoteExactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'tokenOut', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'quoteExactInputSingle',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quoteExactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'tokenOut', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'quoteExactOutputSingle',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuoterV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuoterV2ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quoteExactInput',
    outputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtPriceX96AfterList', internalType: 'uint160[]', type: 'uint160[]' },
      { name: 'initializedTicksCrossedList', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IQuoterV2.QuoteExactInputSingleParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
    ],
    name: 'quoteExactInputSingle',
    outputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtPriceX96After', internalType: 'uint160', type: 'uint160' },
      { name: 'initializedTicksCrossed', internalType: 'uint32', type: 'uint32' },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quoteExactOutput',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtPriceX96AfterList', internalType: 'uint160[]', type: 'uint160[]' },
      { name: 'initializedTicksCrossedList', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IQuoterV2.QuoteExactOutputSingleParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
    ],
    name: 'quoteExactOutputSingle',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtPriceX96After', internalType: 'uint160', type: 'uint160' },
      { name: 'initializedTicksCrossed', internalType: 'uint32', type: 'uint32' },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISelfPermit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSelfPermitABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermit',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitAllowed',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitAllowedIfNecessary',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitIfNecessary',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISwapRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSwapRouterABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactInputParams',
        type: 'tuple',
        components: [
          { name: 'path', internalType: 'bytes', type: 'bytes' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'exactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactInputSingleParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
    ],
    name: 'exactInputSingle',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactOutputParams',
        type: 'tuple',
        components: [
          { name: 'path', internalType: 'bytes', type: 'bytes' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'exactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactOutputSingleParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
          { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
    ],
    name: 'exactOutputSingle',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'uniswapV3SwapCallback',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ITickLens
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTickLensABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'pool', internalType: 'address', type: 'address' },
      { name: 'tickBitmapIndex', internalType: 'int16', type: 'int16' },
    ],
    name: 'getPopulatedTicksInWord',
    outputs: [
      {
        name: 'populatedTicks',
        internalType: 'struct ITickLens.PopulatedTick[]',
        type: 'tuple[]',
        components: [
          { name: 'tick', internalType: 'int24', type: 'int24' },
          { name: 'liquidityNet', internalType: 'int128', type: 'int128' },
          { name: 'liquidityGross', internalType: 'uint128', type: 'uint128' },
        ],
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV3Factory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV3FactoryABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: true },
      { name: 'tickSpacing', internalType: 'int24', type: 'int24', indexed: true },
    ],
    name: 'FeeAmountEnabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'oldOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'token0', internalType: 'address', type: 'address', indexed: true },
      { name: 'token1', internalType: 'address', type: 'address', indexed: true },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: true },
      { name: 'tickSpacing', internalType: 'int24', type: 'int24', indexed: false },
      { name: 'pool', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'PoolCreated',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    name: 'createPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
    ],
    name: 'enableFeeAmount',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'fee', internalType: 'uint24', type: 'uint24' }],
    name: 'feeAmountTickSpacing',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    name: 'getPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'setOwner',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV3MintCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV3MintCallbackABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amount0Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'uniswapV3MintCallback',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV3Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV3PoolABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'tickLower', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'tickUpper', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'amount', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Burn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: false },
      { name: 'tickLower', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'tickUpper', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'amount0', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount1', internalType: 'uint128', type: 'uint128', indexed: false },
    ],
    name: 'Collect',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount0', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount1', internalType: 'uint128', type: 'uint128', indexed: false },
    ],
    name: 'CollectProtocol',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'paid0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'paid1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Flash',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'observationCardinalityNextOld', internalType: 'uint16', type: 'uint16', indexed: false },
      { name: 'observationCardinalityNextNew', internalType: 'uint16', type: 'uint16', indexed: false },
    ],
    name: 'IncreaseObservationCardinalityNext',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160', indexed: false },
      { name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
    ],
    name: 'Initialize',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: false },
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'tickLower', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'tickUpper', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'amount', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'feeProtocol0Old', internalType: 'uint8', type: 'uint8', indexed: false },
      { name: 'feeProtocol1Old', internalType: 'uint8', type: 'uint8', indexed: false },
      { name: 'feeProtocol0New', internalType: 'uint8', type: 'uint8', indexed: false },
      { name: 'feeProtocol1New', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'SetFeeProtocol',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount0', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'amount1', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160', indexed: false },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
    ],
    name: 'Swap',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'amount0Requested', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1Requested', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount0Requested', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1Requested', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'collectProtocol',
    outputs: [
      { name: 'amount0', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'fee',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal0X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal1X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'flash',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'observationCardinalityNext', internalType: 'uint16', type: 'uint16' }],
    name: 'increaseObservationCardinalityNext',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' }],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'liquidity',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxLiquidityPerTick',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'observations',
    outputs: [
      { name: 'blockTimestamp', internalType: 'uint32', type: 'uint32' },
      { name: 'tickCumulative', internalType: 'int56', type: 'int56' },
      { name: 'secondsPerLiquidityCumulativeX128', internalType: 'uint160', type: 'uint160' },
      { name: 'initialized', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'secondsAgos', internalType: 'uint32[]', type: 'uint32[]' }],
    name: 'observe',
    outputs: [
      { name: 'tickCumulatives', internalType: 'int56[]', type: 'int56[]' },
      { name: 'secondsPerLiquidityCumulativeX128s', internalType: 'uint160[]', type: 'uint160[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'key', internalType: 'bytes32', type: 'bytes32' }],
    name: 'positions',
    outputs: [
      { name: '_liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'feeGrowthInside0LastX128', internalType: 'uint256', type: 'uint256' },
      { name: 'feeGrowthInside1LastX128', internalType: 'uint256', type: 'uint256' },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'protocolFees',
    outputs: [
      { name: 'token0', internalType: 'uint128', type: 'uint128' },
      { name: 'token1', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'feeProtocol0', internalType: 'uint8', type: 'uint8' },
      { name: 'feeProtocol1', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'setFeeProtocol',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'slot0',
    outputs: [
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
      { name: 'tick', internalType: 'int24', type: 'int24' },
      { name: 'observationIndex', internalType: 'uint16', type: 'uint16' },
      { name: 'observationCardinality', internalType: 'uint16', type: 'uint16' },
      { name: 'observationCardinalityNext', internalType: 'uint16', type: 'uint16' },
      { name: 'feeProtocol', internalType: 'uint8', type: 'uint8' },
      { name: 'unlocked', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
    ],
    name: 'snapshotCumulativesInside',
    outputs: [
      { name: 'tickCumulativeInside', internalType: 'int56', type: 'int56' },
      { name: 'secondsPerLiquidityInsideX128', internalType: 'uint160', type: 'uint160' },
      { name: 'secondsInside', internalType: 'uint32', type: 'uint32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
      { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [
      { name: 'amount0', internalType: 'int256', type: 'int256' },
      { name: 'amount1', internalType: 'int256', type: 'int256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'wordPosition', internalType: 'int16', type: 'int16' }],
    name: 'tickBitmap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'tickSpacing',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }],
    name: 'ticks',
    outputs: [
      { name: 'liquidityGross', internalType: 'uint128', type: 'uint128' },
      { name: 'liquidityNet', internalType: 'int128', type: 'int128' },
      { name: 'feeGrowthOutside0X128', internalType: 'uint256', type: 'uint256' },
      { name: 'feeGrowthOutside1X128', internalType: 'uint256', type: 'uint256' },
      { name: 'tickCumulativeOutside', internalType: 'int56', type: 'int56' },
      { name: 'secondsPerLiquidityOutsideX128', internalType: 'uint160', type: 'uint160' },
      { name: 'secondsOutside', internalType: 'uint32', type: 'uint32' },
      { name: 'initialized', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'token0',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'token1',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV3PoolActions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV3PoolActionsABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'amount0Requested', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1Requested', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'flash',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'observationCardinalityNext', internalType: 'uint16', type: 'uint16' }],
    name: 'increaseObservationCardinalityNext',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' }],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
      { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [
      { name: 'amount0', internalType: 'int256', type: 'int256' },
      { name: 'amount1', internalType: 'int256', type: 'int256' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV3PoolDerivedState
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV3PoolDerivedStateABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'secondsAgos', internalType: 'uint32[]', type: 'uint32[]' }],
    name: 'observe',
    outputs: [
      { name: 'tickCumulatives', internalType: 'int56[]', type: 'int56[]' },
      { name: 'secondsPerLiquidityCumulativeX128s', internalType: 'uint160[]', type: 'uint160[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
    ],
    name: 'snapshotCumulativesInside',
    outputs: [
      { name: 'tickCumulativeInside', internalType: 'int56', type: 'int56' },
      { name: 'secondsPerLiquidityInsideX128', internalType: 'uint160', type: 'uint160' },
      { name: 'secondsInside', internalType: 'uint32', type: 'uint32' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV3PoolEvents
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV3PoolEventsABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'tickLower', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'tickUpper', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'amount', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Burn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: false },
      { name: 'tickLower', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'tickUpper', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'amount0', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount1', internalType: 'uint128', type: 'uint128', indexed: false },
    ],
    name: 'Collect',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount0', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount1', internalType: 'uint128', type: 'uint128', indexed: false },
    ],
    name: 'CollectProtocol',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'paid0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'paid1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Flash',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'observationCardinalityNextOld', internalType: 'uint16', type: 'uint16', indexed: false },
      { name: 'observationCardinalityNextNew', internalType: 'uint16', type: 'uint16', indexed: false },
    ],
    name: 'IncreaseObservationCardinalityNext',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160', indexed: false },
      { name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
    ],
    name: 'Initialize',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: false },
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'tickLower', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'tickUpper', internalType: 'int24', type: 'int24', indexed: true },
      { name: 'amount', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'feeProtocol0Old', internalType: 'uint8', type: 'uint8', indexed: false },
      { name: 'feeProtocol1Old', internalType: 'uint8', type: 'uint8', indexed: false },
      { name: 'feeProtocol0New', internalType: 'uint8', type: 'uint8', indexed: false },
      { name: 'feeProtocol1New', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'SetFeeProtocol',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount0', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'amount1', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160', indexed: false },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
    ],
    name: 'Swap',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV3PoolImmutables
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV3PoolImmutablesABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'fee',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxLiquidityPerTick',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'tickSpacing',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'token0',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'token1',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV3PoolOwnerActions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV3PoolOwnerActionsABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount0Requested', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1Requested', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'collectProtocol',
    outputs: [
      { name: 'amount0', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'feeProtocol0', internalType: 'uint8', type: 'uint8' },
      { name: 'feeProtocol1', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'setFeeProtocol',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV3PoolState
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV3PoolStateABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal0X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal1X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'liquidity',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'observations',
    outputs: [
      { name: 'blockTimestamp', internalType: 'uint32', type: 'uint32' },
      { name: 'tickCumulative', internalType: 'int56', type: 'int56' },
      { name: 'secondsPerLiquidityCumulativeX128', internalType: 'uint160', type: 'uint160' },
      { name: 'initialized', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'key', internalType: 'bytes32', type: 'bytes32' }],
    name: 'positions',
    outputs: [
      { name: '_liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'feeGrowthInside0LastX128', internalType: 'uint256', type: 'uint256' },
      { name: 'feeGrowthInside1LastX128', internalType: 'uint256', type: 'uint256' },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'protocolFees',
    outputs: [
      { name: 'token0', internalType: 'uint128', type: 'uint128' },
      { name: 'token1', internalType: 'uint128', type: 'uint128' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'slot0',
    outputs: [
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
      { name: 'tick', internalType: 'int24', type: 'int24' },
      { name: 'observationIndex', internalType: 'uint16', type: 'uint16' },
      { name: 'observationCardinality', internalType: 'uint16', type: 'uint16' },
      { name: 'observationCardinalityNext', internalType: 'uint16', type: 'uint16' },
      { name: 'feeProtocol', internalType: 'uint8', type: 'uint8' },
      { name: 'unlocked', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'wordPosition', internalType: 'int16', type: 'int16' }],
    name: 'tickBitmap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }],
    name: 'ticks',
    outputs: [
      { name: 'liquidityGross', internalType: 'uint128', type: 'uint128' },
      { name: 'liquidityNet', internalType: 'int128', type: 'int128' },
      { name: 'feeGrowthOutside0X128', internalType: 'uint256', type: 'uint256' },
      { name: 'feeGrowthOutside1X128', internalType: 'uint256', type: 'uint256' },
      { name: 'tickCumulativeOutside', internalType: 'int56', type: 'int56' },
      { name: 'secondsPerLiquidityOutsideX128', internalType: 'uint160', type: 'uint160' },
      { name: 'secondsOutside', internalType: 'uint32', type: 'uint32' },
      { name: 'initialized', internalType: 'bool', type: 'bool' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV3SwapCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV3SwapCallbackABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'uniswapV3SwapCallback',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IV3Migrator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iv3MigratorABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'createAndInitializePoolIfNecessary',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IV3Migrator.MigrateParams',
        type: 'tuple',
        components: [
          { name: 'pair', internalType: 'address', type: 'address' },
          { name: 'liquidityToMigrate', internalType: 'uint256', type: 'uint256' },
          { name: 'percentageToMigrate', internalType: 'uint8', type: 'uint8' },
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'amount0Min', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Min', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'refundAsETH', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'migrate',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermit',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitAllowed',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitAllowedIfNecessary',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitIfNecessary',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IWETH9
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iweth9ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  { stateMutability: 'payable', type: 'function', inputs: [], name: 'deposit', outputs: [] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LiquidityManagement
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const liquidityManagementABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'WETH9',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'payable', type: 'function', inputs: [], name: 'refundETH', outputs: [] },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amount0Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'uniswapV3MintCallback',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Message
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const messageABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: false },
      { name: 'purpose', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'SetMessage',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'message',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: '_message', internalType: 'string', type: 'string' }],
    name: 'setMessage',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const messageAddress = {
  11155111: '0xcc5A0D6268d70811eDad77799f2168aFe6382E89',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const messageConfig = { address: messageAddress, abi: messageABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Multicall
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const multicallABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NFTDescriptor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nftDescriptorABI = [
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct NFTDescriptor.ConstructTokenURIParams',
        type: 'tuple',
        components: [
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quoteTokenAddress', internalType: 'address', type: 'address' },
          { name: 'baseTokenAddress', internalType: 'address', type: 'address' },
          { name: 'quoteTokenSymbol', internalType: 'string', type: 'string' },
          { name: 'baseTokenSymbol', internalType: 'string', type: 'string' },
          { name: 'quoteTokenDecimals', internalType: 'uint8', type: 'uint8' },
          { name: 'baseTokenDecimals', internalType: 'uint8', type: 'uint8' },
          { name: 'flipRatio', internalType: 'bool', type: 'bool' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'tickCurrent', internalType: 'int24', type: 'int24' },
          { name: 'tickSpacing', internalType: 'int24', type: 'int24' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'poolAddress', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'constructTokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NexthFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nexthFtABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'renounceOwnership', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'safeMint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NonfungiblePositionManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nonfungiblePositionManagerABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_factory', internalType: 'address', type: 'address' },
      { name: '_WETH9', internalType: 'address', type: 'address' },
      { name: '_tokenDescriptor_', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: false },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Collect',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'DecreaseLiquidity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128', indexed: false },
      { name: 'amount0', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount1', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'IncreaseLiquidity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'WETH9',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct INonfungiblePositionManager.CollectParams',
        type: 'tuple',
        components: [
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'amount0Max', internalType: 'uint128', type: 'uint128' },
          { name: 'amount1Max', internalType: 'uint128', type: 'uint128' },
        ],
      },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'createAndInitializePoolIfNecessary',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct INonfungiblePositionManager.DecreaseLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
          { name: 'amount0Min', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Min', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'decreaseLiquidity',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct INonfungiblePositionManager.IncreaseLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'amount0Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount0Min', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Min', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'increaseLiquidity',
    outputs: [
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct INonfungiblePositionManager.MintParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'amount0Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount0Min', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Min', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'mint',
    outputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'positions',
    outputs: [
      { name: 'nonce', internalType: 'uint96', type: 'uint96' },
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'feeGrowthInside0LastX128', internalType: 'uint256', type: 'uint256' },
      { name: 'feeGrowthInside1LastX128', internalType: 'uint256', type: 'uint256' },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
    ],
  },
  { stateMutability: 'payable', type: 'function', inputs: [], name: 'refundETH', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermit',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitAllowed',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitAllowedIfNecessary',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitIfNecessary',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amount0Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'uniswapV3MintCallback',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'renounceOwnership', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PeripheryImmutableState
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const peripheryImmutableStateABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'WETH9',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PeripheryPayments
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const peripheryPaymentsABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'WETH9',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'payable', type: 'function', inputs: [], name: 'refundETH', outputs: [] },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PeripheryPaymentsWithFee
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const peripheryPaymentsWithFeeABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'WETH9',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'payable', type: 'function', inputs: [], name: 'refundETH', outputs: [] },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'feeBips', internalType: 'uint256', type: 'uint256' },
      { name: 'feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenWithFee',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'feeBips', internalType: 'uint256', type: 'uint256' },
      { name: 'feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9WithFee',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolInitializer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolInitializerABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'WETH9',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'createAndInitializePoolIfNecessary',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SelfPermit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const selfPermitABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermit',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitAllowed',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitAllowedIfNecessary',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitIfNecessary',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDC
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usdcABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'renounceOwnership', outputs: [] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Core
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link erc165ABI}__.
 */
export function getErc165(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: erc165ABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165ABI}__.
 */
export function readErc165<TAbi extends readonly unknown[] = typeof erc165ABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>
) {
  return readContract({ abi: erc165ABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link erc20ABI}__.
 */
export function getErc20(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: erc20ABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20ABI}__.
 */
export function readErc20<TAbi extends readonly unknown[] = typeof erc20ABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>
) {
  return readContract({ abi: erc20ABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20ABI}__.
 */
export function writeErc20<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof erc20ABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof erc20ABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: erc20ABI, ...config } as unknown as WriteContractArgs<typeof erc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link erc20ABI}__.
 */
export function prepareWriteErc20<
  TAbi extends readonly unknown[] = typeof erc20ABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: erc20ABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link erc721ABI}__.
 */
export function getErc721(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: erc721ABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721ABI}__.
 */
export function readErc721<TAbi extends readonly unknown[] = typeof erc721ABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>
) {
  return readContract({ abi: erc721ABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721ABI}__.
 */
export function writeErc721<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof erc721ABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof erc721ABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: erc721ABI, ...config } as unknown as WriteContractArgs<typeof erc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link erc721ABI}__.
 */
export function prepareWriteErc721<
  TAbi extends readonly unknown[] = typeof erc721ABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: erc721ABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link erc721PermitABI}__.
 */
export function getErc721Permit(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: erc721PermitABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721PermitABI}__.
 */
export function readErc721Permit<
  TAbi extends readonly unknown[] = typeof erc721PermitABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: erc721PermitABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721PermitABI}__.
 */
export function writeErc721Permit<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof erc721PermitABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof erc721PermitABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: erc721PermitABI, ...config } as unknown as WriteContractArgs<
    typeof erc721PermitABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link erc721PermitABI}__.
 */
export function prepareWriteErc721Permit<
  TAbi extends readonly unknown[] = typeof erc721PermitABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: erc721PermitABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc1271ABI}__.
 */
export function getIerc1271(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc1271ABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1271ABI}__.
 */
export function readIerc1271<
  TAbi extends readonly unknown[] = typeof ierc1271ABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: ierc1271ABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc165ABI}__.
 */
export function getIerc165(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc165ABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165ABI}__.
 */
export function readIerc165<TAbi extends readonly unknown[] = typeof ierc165ABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>
) {
  return readContract({ abi: ierc165ABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function getIerc20(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc20ABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function readIerc20<TAbi extends readonly unknown[] = typeof ierc20ABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>
) {
  return readContract({ abi: ierc20ABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function writeIerc20<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof ierc20ABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof ierc20ABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: ierc20ABI, ...config } as unknown as WriteContractArgs<typeof ierc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function prepareWriteIerc20<
  TAbi extends readonly unknown[] = typeof ierc20ABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: ierc20ABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function getIerc20Metadata(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc20MetadataABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function readIerc20Metadata<
  TAbi extends readonly unknown[] = typeof ierc20MetadataABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: ierc20MetadataABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function writeIerc20Metadata<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof ierc20MetadataABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof ierc20MetadataABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: ierc20MetadataABI, ...config } as unknown as WriteContractArgs<
    typeof ierc20MetadataABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function prepareWriteIerc20Metadata<
  TAbi extends readonly unknown[] = typeof ierc20MetadataABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: ierc20MetadataABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc20PermitABI}__.
 */
export function getIerc20Permit(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc20PermitABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20PermitABI}__.
 */
export function readIerc20Permit<
  TAbi extends readonly unknown[] = typeof ierc20PermitABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: ierc20PermitABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20PermitABI}__.
 */
export function writeIerc20Permit<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof ierc20PermitABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof ierc20PermitABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: ierc20PermitABI, ...config } as unknown as WriteContractArgs<
    typeof ierc20PermitABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ierc20PermitABI}__.
 */
export function prepareWriteIerc20Permit<
  TAbi extends readonly unknown[] = typeof ierc20PermitABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: ierc20PermitABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc20PermitAllowedABI}__.
 */
export function getIerc20PermitAllowed(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc20PermitAllowedABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20PermitAllowedABI}__.
 */
export function writeIerc20PermitAllowed<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof ierc20PermitAllowedABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof ierc20PermitAllowedABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: ierc20PermitAllowedABI, ...config } as unknown as WriteContractArgs<
    typeof ierc20PermitAllowedABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ierc20PermitAllowedABI}__.
 */
export function prepareWriteIerc20PermitAllowed<
  TAbi extends readonly unknown[] = typeof ierc20PermitAllowedABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: ierc20PermitAllowedABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function getIerc721(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc721ABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function readIerc721<TAbi extends readonly unknown[] = typeof ierc721ABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>
) {
  return readContract({ abi: ierc721ABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function writeIerc721<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof ierc721ABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof ierc721ABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: ierc721ABI, ...config } as unknown as WriteContractArgs<typeof ierc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function prepareWriteIerc721<
  TAbi extends readonly unknown[] = typeof ierc721ABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: ierc721ABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function getIerc721Enumerable(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc721EnumerableABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function readIerc721Enumerable<
  TAbi extends readonly unknown[] = typeof ierc721EnumerableABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: ierc721EnumerableABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function writeIerc721Enumerable<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof ierc721EnumerableABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof ierc721EnumerableABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: ierc721EnumerableABI, ...config } as unknown as WriteContractArgs<
    typeof ierc721EnumerableABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function prepareWriteIerc721Enumerable<
  TAbi extends readonly unknown[] = typeof ierc721EnumerableABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: ierc721EnumerableABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function getIerc721Metadata(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc721MetadataABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function readIerc721Metadata<
  TAbi extends readonly unknown[] = typeof ierc721MetadataABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: ierc721MetadataABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function writeIerc721Metadata<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof ierc721MetadataABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof ierc721MetadataABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: ierc721MetadataABI, ...config } as unknown as WriteContractArgs<
    typeof ierc721MetadataABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function prepareWriteIerc721Metadata<
  TAbi extends readonly unknown[] = typeof ierc721MetadataABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: ierc721MetadataABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc721PermitABI}__.
 */
export function getIerc721Permit(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc721PermitABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721PermitABI}__.
 */
export function readIerc721Permit<
  TAbi extends readonly unknown[] = typeof ierc721PermitABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: ierc721PermitABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721PermitABI}__.
 */
export function writeIerc721Permit<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof ierc721PermitABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof ierc721PermitABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: ierc721PermitABI, ...config } as unknown as WriteContractArgs<
    typeof ierc721PermitABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ierc721PermitABI}__.
 */
export function prepareWriteIerc721Permit<
  TAbi extends readonly unknown[] = typeof ierc721PermitABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: ierc721PermitABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function getIerc721Receiver(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ierc721ReceiverABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function writeIerc721Receiver<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof ierc721ReceiverABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof ierc721ReceiverABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: ierc721ReceiverABI, ...config } as unknown as WriteContractArgs<
    typeof ierc721ReceiverABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function prepareWriteIerc721Receiver<
  TAbi extends readonly unknown[] = typeof ierc721ReceiverABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: ierc721ReceiverABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iMulticallABI}__.
 */
export function getIMulticall(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iMulticallABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticallABI}__.
 */
export function writeIMulticall<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iMulticallABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iMulticallABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iMulticallABI, ...config } as unknown as WriteContractArgs<
    typeof iMulticallABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iMulticallABI}__.
 */
export function prepareWriteIMulticall<
  TAbi extends readonly unknown[] = typeof iMulticallABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iMulticallABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iNonfungiblePositionManagerABI}__.
 */
export function getINonfungiblePositionManager(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iNonfungiblePositionManagerABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iNonfungiblePositionManagerABI}__.
 */
export function readINonfungiblePositionManager<
  TAbi extends readonly unknown[] = typeof iNonfungiblePositionManagerABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: iNonfungiblePositionManagerABI, ...config } as unknown as ReadContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iNonfungiblePositionManagerABI}__.
 */
export function writeINonfungiblePositionManager<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iNonfungiblePositionManagerABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iNonfungiblePositionManagerABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iNonfungiblePositionManagerABI, ...config } as unknown as WriteContractArgs<
    typeof iNonfungiblePositionManagerABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iNonfungiblePositionManagerABI}__.
 */
export function prepareWriteINonfungiblePositionManager<
  TAbi extends readonly unknown[] = typeof iNonfungiblePositionManagerABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({
    abi: iNonfungiblePositionManagerABI,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iNonfungibleTokenPositionDescriptorABI}__.
 */
export function getINonfungibleTokenPositionDescriptor(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iNonfungibleTokenPositionDescriptorABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iNonfungibleTokenPositionDescriptorABI}__.
 */
export function readINonfungibleTokenPositionDescriptor<
  TAbi extends readonly unknown[] = typeof iNonfungibleTokenPositionDescriptorABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: iNonfungibleTokenPositionDescriptorABI, ...config } as unknown as ReadContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iPeripheryImmutableStateABI}__.
 */
export function getIPeripheryImmutableState(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iPeripheryImmutableStateABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPeripheryImmutableStateABI}__.
 */
export function readIPeripheryImmutableState<
  TAbi extends readonly unknown[] = typeof iPeripheryImmutableStateABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: iPeripheryImmutableStateABI, ...config } as unknown as ReadContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iPeripheryPaymentsABI}__.
 */
export function getIPeripheryPayments(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iPeripheryPaymentsABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPeripheryPaymentsABI}__.
 */
export function writeIPeripheryPayments<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iPeripheryPaymentsABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iPeripheryPaymentsABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iPeripheryPaymentsABI, ...config } as unknown as WriteContractArgs<
    typeof iPeripheryPaymentsABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iPeripheryPaymentsABI}__.
 */
export function prepareWriteIPeripheryPayments<
  TAbi extends readonly unknown[] = typeof iPeripheryPaymentsABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iPeripheryPaymentsABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iPeripheryPaymentsWithFeeABI}__.
 */
export function getIPeripheryPaymentsWithFee(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iPeripheryPaymentsWithFeeABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPeripheryPaymentsWithFeeABI}__.
 */
export function writeIPeripheryPaymentsWithFee<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iPeripheryPaymentsWithFeeABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iPeripheryPaymentsWithFeeABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iPeripheryPaymentsWithFeeABI, ...config } as unknown as WriteContractArgs<
    typeof iPeripheryPaymentsWithFeeABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iPeripheryPaymentsWithFeeABI}__.
 */
export function prepareWriteIPeripheryPaymentsWithFee<
  TAbi extends readonly unknown[] = typeof iPeripheryPaymentsWithFeeABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iPeripheryPaymentsWithFeeABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iPoolInitializerABI}__.
 */
export function getIPoolInitializer(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iPoolInitializerABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPoolInitializerABI}__.
 */
export function writeIPoolInitializer<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iPoolInitializerABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iPoolInitializerABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iPoolInitializerABI, ...config } as unknown as WriteContractArgs<
    typeof iPoolInitializerABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iPoolInitializerABI}__.
 */
export function prepareWriteIPoolInitializer<
  TAbi extends readonly unknown[] = typeof iPoolInitializerABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iPoolInitializerABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iQuoterABI}__.
 */
export function getIQuoter(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iQuoterABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iQuoterABI}__.
 */
export function writeIQuoter<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iQuoterABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iQuoterABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iQuoterABI, ...config } as unknown as WriteContractArgs<typeof iQuoterABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iQuoterABI}__.
 */
export function prepareWriteIQuoter<
  TAbi extends readonly unknown[] = typeof iQuoterABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iQuoterABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iQuoterV2ABI}__.
 */
export function getIQuoterV2(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iQuoterV2ABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iQuoterV2ABI}__.
 */
export function writeIQuoterV2<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iQuoterV2ABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iQuoterV2ABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iQuoterV2ABI, ...config } as unknown as WriteContractArgs<
    typeof iQuoterV2ABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iQuoterV2ABI}__.
 */
export function prepareWriteIQuoterV2<
  TAbi extends readonly unknown[] = typeof iQuoterV2ABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iQuoterV2ABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iSelfPermitABI}__.
 */
export function getISelfPermit(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iSelfPermitABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSelfPermitABI}__.
 */
export function writeISelfPermit<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iSelfPermitABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iSelfPermitABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iSelfPermitABI, ...config } as unknown as WriteContractArgs<
    typeof iSelfPermitABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iSelfPermitABI}__.
 */
export function prepareWriteISelfPermit<
  TAbi extends readonly unknown[] = typeof iSelfPermitABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iSelfPermitABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iSwapRouterABI}__.
 */
export function getISwapRouter(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iSwapRouterABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSwapRouterABI}__.
 */
export function writeISwapRouter<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iSwapRouterABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iSwapRouterABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iSwapRouterABI, ...config } as unknown as WriteContractArgs<
    typeof iSwapRouterABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iSwapRouterABI}__.
 */
export function prepareWriteISwapRouter<
  TAbi extends readonly unknown[] = typeof iSwapRouterABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iSwapRouterABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iTickLensABI}__.
 */
export function getITickLens(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iTickLensABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iTickLensABI}__.
 */
export function readITickLens<
  TAbi extends readonly unknown[] = typeof iTickLensABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: iTickLensABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iUniswapV3FactoryABI}__.
 */
export function getIUniswapV3Factory(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iUniswapV3FactoryABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iUniswapV3FactoryABI}__.
 */
export function readIUniswapV3Factory<
  TAbi extends readonly unknown[] = typeof iUniswapV3FactoryABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: iUniswapV3FactoryABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUniswapV3FactoryABI}__.
 */
export function writeIUniswapV3Factory<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iUniswapV3FactoryABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iUniswapV3FactoryABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iUniswapV3FactoryABI, ...config } as unknown as WriteContractArgs<
    typeof iUniswapV3FactoryABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iUniswapV3FactoryABI}__.
 */
export function prepareWriteIUniswapV3Factory<
  TAbi extends readonly unknown[] = typeof iUniswapV3FactoryABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iUniswapV3FactoryABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iUniswapV3MintCallbackABI}__.
 */
export function getIUniswapV3MintCallback(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iUniswapV3MintCallbackABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUniswapV3MintCallbackABI}__.
 */
export function writeIUniswapV3MintCallback<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iUniswapV3MintCallbackABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iUniswapV3MintCallbackABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iUniswapV3MintCallbackABI, ...config } as unknown as WriteContractArgs<
    typeof iUniswapV3MintCallbackABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iUniswapV3MintCallbackABI}__.
 */
export function prepareWriteIUniswapV3MintCallback<
  TAbi extends readonly unknown[] = typeof iUniswapV3MintCallbackABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iUniswapV3MintCallbackABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iUniswapV3PoolABI}__.
 */
export function getIUniswapV3Pool(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iUniswapV3PoolABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iUniswapV3PoolABI}__.
 */
export function readIUniswapV3Pool<
  TAbi extends readonly unknown[] = typeof iUniswapV3PoolABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: iUniswapV3PoolABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUniswapV3PoolABI}__.
 */
export function writeIUniswapV3Pool<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iUniswapV3PoolABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iUniswapV3PoolABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iUniswapV3PoolABI, ...config } as unknown as WriteContractArgs<
    typeof iUniswapV3PoolABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iUniswapV3PoolABI}__.
 */
export function prepareWriteIUniswapV3Pool<
  TAbi extends readonly unknown[] = typeof iUniswapV3PoolABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iUniswapV3PoolABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iUniswapV3PoolActionsABI}__.
 */
export function getIUniswapV3PoolActions(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iUniswapV3PoolActionsABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUniswapV3PoolActionsABI}__.
 */
export function writeIUniswapV3PoolActions<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iUniswapV3PoolActionsABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iUniswapV3PoolActionsABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iUniswapV3PoolActionsABI, ...config } as unknown as WriteContractArgs<
    typeof iUniswapV3PoolActionsABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iUniswapV3PoolActionsABI}__.
 */
export function prepareWriteIUniswapV3PoolActions<
  TAbi extends readonly unknown[] = typeof iUniswapV3PoolActionsABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iUniswapV3PoolActionsABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iUniswapV3PoolDerivedStateABI}__.
 */
export function getIUniswapV3PoolDerivedState(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iUniswapV3PoolDerivedStateABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iUniswapV3PoolDerivedStateABI}__.
 */
export function readIUniswapV3PoolDerivedState<
  TAbi extends readonly unknown[] = typeof iUniswapV3PoolDerivedStateABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: iUniswapV3PoolDerivedStateABI, ...config } as unknown as ReadContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iUniswapV3PoolEventsABI}__.
 */
export function getIUniswapV3PoolEvents(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iUniswapV3PoolEventsABI, ...config })
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iUniswapV3PoolImmutablesABI}__.
 */
export function getIUniswapV3PoolImmutables(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iUniswapV3PoolImmutablesABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iUniswapV3PoolImmutablesABI}__.
 */
export function readIUniswapV3PoolImmutables<
  TAbi extends readonly unknown[] = typeof iUniswapV3PoolImmutablesABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: iUniswapV3PoolImmutablesABI, ...config } as unknown as ReadContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iUniswapV3PoolOwnerActionsABI}__.
 */
export function getIUniswapV3PoolOwnerActions(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iUniswapV3PoolOwnerActionsABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUniswapV3PoolOwnerActionsABI}__.
 */
export function writeIUniswapV3PoolOwnerActions<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iUniswapV3PoolOwnerActionsABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iUniswapV3PoolOwnerActionsABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iUniswapV3PoolOwnerActionsABI, ...config } as unknown as WriteContractArgs<
    typeof iUniswapV3PoolOwnerActionsABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iUniswapV3PoolOwnerActionsABI}__.
 */
export function prepareWriteIUniswapV3PoolOwnerActions<
  TAbi extends readonly unknown[] = typeof iUniswapV3PoolOwnerActionsABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({
    abi: iUniswapV3PoolOwnerActionsABI,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iUniswapV3PoolStateABI}__.
 */
export function getIUniswapV3PoolState(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iUniswapV3PoolStateABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iUniswapV3PoolStateABI}__.
 */
export function readIUniswapV3PoolState<
  TAbi extends readonly unknown[] = typeof iUniswapV3PoolStateABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: iUniswapV3PoolStateABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iUniswapV3SwapCallbackABI}__.
 */
export function getIUniswapV3SwapCallback(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iUniswapV3SwapCallbackABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUniswapV3SwapCallbackABI}__.
 */
export function writeIUniswapV3SwapCallback<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iUniswapV3SwapCallbackABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iUniswapV3SwapCallbackABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iUniswapV3SwapCallbackABI, ...config } as unknown as WriteContractArgs<
    typeof iUniswapV3SwapCallbackABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iUniswapV3SwapCallbackABI}__.
 */
export function prepareWriteIUniswapV3SwapCallback<
  TAbi extends readonly unknown[] = typeof iUniswapV3SwapCallbackABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iUniswapV3SwapCallbackABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iv3MigratorABI}__.
 */
export function getIv3Migrator(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iv3MigratorABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iv3MigratorABI}__.
 */
export function writeIv3Migrator<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iv3MigratorABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iv3MigratorABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iv3MigratorABI, ...config } as unknown as WriteContractArgs<
    typeof iv3MigratorABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iv3MigratorABI}__.
 */
export function prepareWriteIv3Migrator<
  TAbi extends readonly unknown[] = typeof iv3MigratorABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iv3MigratorABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link iweth9ABI}__.
 */
export function getIweth9(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: iweth9ABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iweth9ABI}__.
 */
export function readIweth9<TAbi extends readonly unknown[] = typeof iweth9ABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>
) {
  return readContract({ abi: iweth9ABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iweth9ABI}__.
 */
export function writeIweth9<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof iweth9ABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof iweth9ABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: iweth9ABI, ...config } as unknown as WriteContractArgs<typeof iweth9ABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link iweth9ABI}__.
 */
export function prepareWriteIweth9<
  TAbi extends readonly unknown[] = typeof iweth9ABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: iweth9ABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link liquidityManagementABI}__.
 */
export function getLiquidityManagement(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: liquidityManagementABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link liquidityManagementABI}__.
 */
export function readLiquidityManagement<
  TAbi extends readonly unknown[] = typeof liquidityManagementABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: liquidityManagementABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link liquidityManagementABI}__.
 */
export function writeLiquidityManagement<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof liquidityManagementABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof liquidityManagementABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: liquidityManagementABI, ...config } as unknown as WriteContractArgs<
    typeof liquidityManagementABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link liquidityManagementABI}__.
 */
export function prepareWriteLiquidityManagement<
  TAbi extends readonly unknown[] = typeof liquidityManagementABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: liquidityManagementABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link messageABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export function getMessage(
  config: Omit<GetContractArgs, 'abi' | 'address'> & { chainId?: keyof typeof messageAddress }
) {
  return getContract({ abi: messageABI, address: messageAddress[11155111], ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link messageABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export function readMessage<TAbi extends readonly unknown[] = typeof messageABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi' | 'address'> & { chainId?: keyof typeof messageAddress }
) {
  return readContract({
    abi: messageABI,
    address: messageAddress[11155111],
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link messageABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export function writeMessage<
  TFunctionName extends string,
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof messageAddress,
>(
  config:
    | (Omit<WriteContractPreparedArgs<typeof messageABI, TFunctionName>, 'abi' | 'address'> & {
        mode: TMode
        chainId?: TMode extends 'prepared' ? TChainId : keyof typeof messageAddress
      })
    | (Omit<WriteContractUnpreparedArgs<typeof messageABI, TFunctionName>, 'abi' | 'address'> & {
        mode: TMode
        chainId?: TMode extends 'prepared' ? TChainId : keyof typeof messageAddress
      })
) {
  return writeContract({
    abi: messageABI,
    address: messageAddress[11155111],
    ...config,
  } as unknown as WriteContractArgs<typeof messageABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link messageABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export function prepareWriteMessage<
  TAbi extends readonly unknown[] = typeof messageABI,
  TFunctionName extends string = string,
>(
  config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof messageAddress
  }
) {
  return prepareWriteContract({
    abi: messageABI,
    address: messageAddress[11155111],
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link multicallABI}__.
 */
export function getMulticall(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: multicallABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link multicallABI}__.
 */
export function writeMulticall<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof multicallABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof multicallABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: multicallABI, ...config } as unknown as WriteContractArgs<
    typeof multicallABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link multicallABI}__.
 */
export function prepareWriteMulticall<
  TAbi extends readonly unknown[] = typeof multicallABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: multicallABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link nftDescriptorABI}__.
 */
export function getNftDescriptor(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: nftDescriptorABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nftDescriptorABI}__.
 */
export function readNftDescriptor<
  TAbi extends readonly unknown[] = typeof nftDescriptorABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: nftDescriptorABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link nexthFtABI}__.
 */
export function getNexthFt(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: nexthFtABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtABI}__.
 */
export function readNexthFt<TAbi extends readonly unknown[] = typeof nexthFtABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>
) {
  return readContract({ abi: nexthFtABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nexthFtABI}__.
 */
export function writeNexthFt<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof nexthFtABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof nexthFtABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: nexthFtABI, ...config } as unknown as WriteContractArgs<typeof nexthFtABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link nexthFtABI}__.
 */
export function prepareWriteNexthFt<
  TAbi extends readonly unknown[] = typeof nexthFtABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: nexthFtABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link nonfungiblePositionManagerABI}__.
 */
export function getNonfungiblePositionManager(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: nonfungiblePositionManagerABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nonfungiblePositionManagerABI}__.
 */
export function readNonfungiblePositionManager<
  TAbi extends readonly unknown[] = typeof nonfungiblePositionManagerABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: nonfungiblePositionManagerABI, ...config } as unknown as ReadContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nonfungiblePositionManagerABI}__.
 */
export function writeNonfungiblePositionManager<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof nonfungiblePositionManagerABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof nonfungiblePositionManagerABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: nonfungiblePositionManagerABI, ...config } as unknown as WriteContractArgs<
    typeof nonfungiblePositionManagerABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link nonfungiblePositionManagerABI}__.
 */
export function prepareWriteNonfungiblePositionManager<
  TAbi extends readonly unknown[] = typeof nonfungiblePositionManagerABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({
    abi: nonfungiblePositionManagerABI,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ownableABI}__.
 */
export function getOwnable(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ownableABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableABI}__.
 */
export function readOwnable<TAbi extends readonly unknown[] = typeof ownableABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>
) {
  return readContract({ abi: ownableABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableABI}__.
 */
export function writeOwnable<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof ownableABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof ownableABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: ownableABI, ...config } as unknown as WriteContractArgs<typeof ownableABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ownableABI}__.
 */
export function prepareWriteOwnable<
  TAbi extends readonly unknown[] = typeof ownableABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: ownableABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link peripheryImmutableStateABI}__.
 */
export function getPeripheryImmutableState(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: peripheryImmutableStateABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link peripheryImmutableStateABI}__.
 */
export function readPeripheryImmutableState<
  TAbi extends readonly unknown[] = typeof peripheryImmutableStateABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: peripheryImmutableStateABI, ...config } as unknown as ReadContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link peripheryPaymentsABI}__.
 */
export function getPeripheryPayments(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: peripheryPaymentsABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link peripheryPaymentsABI}__.
 */
export function readPeripheryPayments<
  TAbi extends readonly unknown[] = typeof peripheryPaymentsABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: peripheryPaymentsABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link peripheryPaymentsABI}__.
 */
export function writePeripheryPayments<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof peripheryPaymentsABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof peripheryPaymentsABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: peripheryPaymentsABI, ...config } as unknown as WriteContractArgs<
    typeof peripheryPaymentsABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link peripheryPaymentsABI}__.
 */
export function prepareWritePeripheryPayments<
  TAbi extends readonly unknown[] = typeof peripheryPaymentsABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: peripheryPaymentsABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link peripheryPaymentsWithFeeABI}__.
 */
export function getPeripheryPaymentsWithFee(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: peripheryPaymentsWithFeeABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link peripheryPaymentsWithFeeABI}__.
 */
export function readPeripheryPaymentsWithFee<
  TAbi extends readonly unknown[] = typeof peripheryPaymentsWithFeeABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: peripheryPaymentsWithFeeABI, ...config } as unknown as ReadContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link peripheryPaymentsWithFeeABI}__.
 */
export function writePeripheryPaymentsWithFee<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof peripheryPaymentsWithFeeABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof peripheryPaymentsWithFeeABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: peripheryPaymentsWithFeeABI, ...config } as unknown as WriteContractArgs<
    typeof peripheryPaymentsWithFeeABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link peripheryPaymentsWithFeeABI}__.
 */
export function prepareWritePeripheryPaymentsWithFee<
  TAbi extends readonly unknown[] = typeof peripheryPaymentsWithFeeABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: peripheryPaymentsWithFeeABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link poolInitializerABI}__.
 */
export function getPoolInitializer(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: poolInitializerABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolInitializerABI}__.
 */
export function readPoolInitializer<
  TAbi extends readonly unknown[] = typeof poolInitializerABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({ abi: poolInitializerABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolInitializerABI}__.
 */
export function writePoolInitializer<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof poolInitializerABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof poolInitializerABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: poolInitializerABI, ...config } as unknown as WriteContractArgs<
    typeof poolInitializerABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link poolInitializerABI}__.
 */
export function prepareWritePoolInitializer<
  TAbi extends readonly unknown[] = typeof poolInitializerABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: poolInitializerABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link selfPermitABI}__.
 */
export function getSelfPermit(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: selfPermitABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link selfPermitABI}__.
 */
export function writeSelfPermit<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof selfPermitABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof selfPermitABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: selfPermitABI, ...config } as unknown as WriteContractArgs<
    typeof selfPermitABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link selfPermitABI}__.
 */
export function prepareWriteSelfPermit<
  TAbi extends readonly unknown[] = typeof selfPermitABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: selfPermitABI, ...config } as unknown as PrepareWriteContractConfig<
    TAbi,
    TFunctionName
  >)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link usdcABI}__.
 */
export function getUsdc(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: usdcABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link usdcABI}__.
 */
export function readUsdc<TAbi extends readonly unknown[] = typeof usdcABI, TFunctionName extends string = string>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>
) {
  return readContract({ abi: usdcABI, ...config } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link usdcABI}__.
 */
export function writeUsdc<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof usdcABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof usdcABI, TFunctionName>, 'abi'>
) {
  return writeContract({ abi: usdcABI, ...config } as unknown as WriteContractArgs<typeof usdcABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link usdcABI}__.
 */
export function prepareWriteUsdc<
  TAbi extends readonly unknown[] = typeof usdcABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({ abi: usdcABI, ...config } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}
