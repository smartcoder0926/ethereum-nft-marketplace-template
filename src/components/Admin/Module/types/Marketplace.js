import { useState } from "react"


export const useMarketPlaceContract = (web3, address) => {
    const [allListings, setAllListings] = useState([])

    const getAllListings = async () => {
        const contract = new web3.eth.Contract(abi, address)
        const listings = await contract.methods.getAllListings().call().then()
        setAllListings(listings)
        return listings
    }

    const unlist = async (listingId, amount, currentUser) => {
        const contract = new web3.eth.Contract(abi, address)
        await contract.methods.unlist(listingId, amount).send({from : currentUser})
        .on('receipt', (receipt) => {
            return receipt
        })
    }

    return {
        getAllListings, unlist, allListings
    }


}

export const abi = [
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_controlCenter",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_trustedForwarder",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_uri",
                "type": "string"
            },
            {
                "internalType": "uint128",
                "name": "_marketFeeBps",
                "type": "uint128"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "listingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleStart",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleEnd",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokensPerBuyer",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Market.TokenType",
                        "name": "tokenType",
                        "type": "uint8"
                    }
                ],
                "indexed": false,
                "internalType": "struct Market.Listing",
                "name": "listing",
                "type": "tuple"
            }
        ],
        "name": "ListingUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint128",
                "name": "newFee",
                "type": "uint128"
            }
        ],
        "name": "MarketFeeUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "assetContract",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "listingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleStart",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleEnd",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokensPerBuyer",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Market.TokenType",
                        "name": "tokenType",
                        "type": "uint8"
                    }
                ],
                "indexed": false,
                "internalType": "struct Market.Listing",
                "name": "listing",
                "type": "tuple"
            }
        ],
        "name": "NewListing",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "assetContract",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "listingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleStart",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleEnd",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokensPerBuyer",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Market.TokenType",
                        "name": "tokenType",
                        "type": "uint8"
                    }
                ],
                "indexed": false,
                "internalType": "struct Market.Listing",
                "name": "listing",
                "type": "tuple"
            }
        ],
        "name": "NewSale",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Paused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bool",
                "name": "restricted",
                "type": "bool"
            }
        ],
        "name": "RestrictedListerRoleUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Unpaused",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "LISTER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PAUSER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_contractURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            }
        ],
        "name": "addToListing",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "boughtFromListing",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            }
        ],
        "name": "buy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllListings",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "listingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleStart",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleEnd",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokensPerBuyer",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Market.TokenType",
                        "name": "tokenType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Market.Listing[]",
                "name": "allListings",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            }
        ],
        "name": "getListing",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "listingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleStart",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleEnd",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokensPerBuyer",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Market.TokenType",
                        "name": "tokenType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Market.Listing",
                "name": "listing",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_assetContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "getListingsByAsset",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "listingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleStart",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleEnd",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokensPerBuyer",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Market.TokenType",
                        "name": "tokenType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Market.Listing[]",
                "name": "tokenListings",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_assetContract",
                "type": "address"
            }
        ],
        "name": "getListingsByAssetContract",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "listingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleStart",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleEnd",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokensPerBuyer",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Market.TokenType",
                        "name": "tokenType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Market.Listing[]",
                "name": "tokenListings",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_seller",
                "type": "address"
            }
        ],
        "name": "getListingsBySeller",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "listingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleStart",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "saleEnd",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokensPerBuyer",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Market.TokenType",
                        "name": "tokenType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Market.Listing[]",
                "name": "sellerListings",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleMemberCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "forwarder",
                "type": "address"
            }
        ],
        "name": "isTrustedForwarder",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_assetContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_currency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_pricePerToken",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokensPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_secondsUntilStart",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_secondsUntilEnd",
                "type": "uint256"
            }
        ],
        "name": "list",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "listings",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "assetContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "currency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "pricePerToken",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "saleStart",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "saleEnd",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokensPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "enum Market.TokenType",
                "name": "tokenType",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketFeeBps",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "",
                "type": "uint128"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes[]",
                "name": "data",
                "type": "bytes[]"
            }
        ],
        "name": "multicall",
        "outputs": [
            {
                "internalType": "bytes[]",
                "name": "results",
                "type": "bytes[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "restrictedListerRoleOnly",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_URI",
                "type": "string"
            }
        ],
        "name": "setContractURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "feeBps",
                "type": "uint128"
            }
        ],
        "name": "setMarketFeeBps",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "restricted",
                "type": "bool"
            }
        ],
        "name": "setRestrictedListerRoleOnly",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalListings",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            }
        ],
        "name": "unlist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_pricePerToken",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_currency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokensPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_secondsUntilStart",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_secondsUntilEnd",
                "type": "uint256"
            }
        ],
        "name": "updateListingParams",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]