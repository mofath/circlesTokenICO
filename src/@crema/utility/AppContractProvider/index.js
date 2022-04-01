import {useEffect, useState, createContext, useContext} from 'react';
import {toast, Slide} from 'react-toastify';
import PropTypes from 'prop-types';
import {ethers} from 'ethers';
import {contractABI, contractAddress} from '../../../utils/Constants';
import {db} from '../../../@crema/services/auth/firebase/firebase';
import {collection, getDocs, Timestamp, addDoc} from 'firebase/firestore';
import {useAuthUser} from '../../utility/AuthHooks';

export const ContractContext = createContext();
export const useContractContext = () => useContext(ContractContext);

const AppContractProvider = ({children}) => {
  const {user} = useAuthUser();

  const {ethereum} = window;

  const [userInvestments, setUserInvestments] = useState([]);
  console.log(
    '🚀 ~ file: index.js ~ line 16 ~ AppContractProvider ~ userInvestments',
    userInvestments,
  );

  const [dataIsReturned, setDataIsReturned] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');

  const [totalSupply, setTotalSupply] = useState();
  console.log(
    '🚀 ~ file: index.js ~ line 22 ~ AppContractProvider ~ totalSupply',
    totalSupply,
  );

  const [minInvestment, setMinInvestment] = useState();
  console.log(
    '🚀 ~ file: index.js ~ line 25 ~ AppContractProvider ~ minInvestment',
    minInvestment,
  );

  const [maxInvestment, setMaxInvestment] = useState();
  console.log(
    '🚀 ~ file: index.js ~ line 28 ~ AppContractProvider ~ maxInvestment',
    maxInvestment,
  );

  const [saleStart, setSaleStart] = useState();
  const [saleEnd, setSaleEnd] = useState();
  const [currentState, setCurrentState] = useState();

  const getInvestments = async () => {
    const docRef = collection(db, 'users', user.uid, 'investments');
    const docSnap = await getDocs(docRef);

    const fetchedInvestments = [];
    docSnap.forEach((doc) => {
      fetchedInvestments.push(doc.data());
    });
    setUserInvestments(fetchedInvestments);
  };

  // Sets up a new Ethereum provider and returns an interface for interacting with the smart contract
  const createEthereumContract = async () => {
    const provider = await new ethers.providers.Web3Provider(ethereum);
    const signer = await provider.getSigner();
    const icoContract = await new ethers.Contract(
      contractAddress,
      contractABI,
      signer,
    );
    return icoContract;
  };

  const getICODetails = async () => {
    try {
      if (ethereum) {
        setDataIsReturned(true);
        const icoContract = await createEthereumContract();

        const totalSupply = await icoContract.totalSupply();
        const minInvestment = await icoContract.minInvestment();
        const maxInvestment = await icoContract.maxInvestment();
        const currentState = await icoContract.getCurrentState();
        const saleStart = await icoContract.saleStart();
        const saleEnd = await icoContract.saleEnd();

        setTotalSupply(totalSupply);
        setMinInvestment(minInvestment);
        setMaxInvestment(maxInvestment);
        setCurrentState(currentState);
        setSaleStart(parseInt(saleStart, 10).toString());
        setSaleEnd(parseInt(saleEnd, 10).toString());
        setDataIsReturned(false);
      } else {
        console.log('Ethereum is not present');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.');
      const accounts = await window.ethereum.request({method: 'eth_accounts'});
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.');
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  };

  //   const invest = async (investmentAmount) => {
  //     try {
  //       if (ethereum) {
  //         // const parsedAmount = ethers.utils.parseEther(investmentAmount);
  //         const parsedAmount = ethers.utils.parseUnits(investmentAmount, 'ether');

  //         await ethereum.request({
  //           method: 'eth_sendTransaction',
  //           params: [
  //             {
  //               from: currentAccount,
  //               to: contractAddress,
  //               value: parsedAmount._hex,
  //             },
  //           ],
  //         });

  //         // await addDoc(collection(db, 'investors'), {
  //         //   contractAddress: currentAccount,
  //         //   investmentAmount,
  //         //   date: Date.now(),
  //         // });

  //         await collection('users').doc(user.uid).set({
  //           contractAddress: currentAccount,
  //           investmentAmount,
  //           date: Date.now(),
  //         });

  //         toast.success('Thank you for your investment', {
  //           containerId: 'B',
  //           transition: Slide,
  //         });
  //       } else {
  //         console.log('No ethereum object');
  //       }
  //     } catch (error) {
  //       toast.error('An error occurred, please try again later.', {
  //         containerId: 'B',
  //         transition: Slide,
  //       });
  //       console.log(error);

  //       throw new Error('No ethereum object');
  //     }
  //   };

  const invest = async (investmentAmount) => {
    try {
      await addDoc(
        collection(db, 'users', user.uid, 'investments'),
        {
          userId: user.uid,
          contractAddress: currentAccount,
          investmentAmount,
          date: Timestamp.now(),
        },
        {merge: false},
      );

      toast.success('Thank you for your investment', {
        containerId: 'B',
        transition: Slide,
      });
    } catch (error) {
      toast.error('An error occurred, please try again later.', {
        containerId: 'B',
        transition: Slide,
      });
      console.log('🚀 ~ file: index.js ~ line 178 ~ invest ~ error', error);

      throw new Error('No ethereum object');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    getICODetails();
    getInvestments();
  }, []);

  return (
    <ContractContext.Provider
      value={{
        totalSupply: '2222121',
        minInvestment: '2212123123312',
        maxInvestment: '2222223132',
        // totalSupply: parseInt(totalSupply?._hex).toLocaleString(),
        // minInvestment: ethers.utils.formatEther(minInvestment?._hex),
        // maxInvestment: ethers.utils.formatEther(maxInvestment?._hex),
        currentState,
        saleStart: new Date(saleStart * 1000).toLocaleString(),
        saleEnd: new Date(saleEnd * 1000).toLocaleString(),
        connectWallet,
        currentAccount,
        dataIsReturned,
        userInvestments,
        invest,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default AppContractProvider;

AppContractProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
