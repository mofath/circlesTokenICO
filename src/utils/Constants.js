import abi from './Transactions.json';

export const contractABI = abi.abi;
// export const contractAddress = '0x7af1080167fa915228117af4f6d2dae139bcd74d';
// export const contractAddress = '0xf0a821bb326adebc7bb2b409a14259e075f15093'; //
// Ganach
// export const contractAddress = '0x6dec26B4c02adE7B2d81b9Ac5d746994E15DC509';
export const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
