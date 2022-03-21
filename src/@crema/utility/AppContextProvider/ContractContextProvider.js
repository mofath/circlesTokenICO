import {useEffect, useState, createContext, useContext} from 'react';
import {toast, Slide} from 'react-toastify';
import PropTypes from 'prop-types';
import {ethers} from 'ethers';
import {contractABI, contractAddress} from '../../../utils/Constants';
import {db} from '../../../@crema/services/auth/firebase/firebase';
import {addDoc, collection, getDocs} from 'firebase/firestore';

export const ContractContext = createContext();
export const useContractContext = () => useContext(ContractContext);

export const ContractContextProvider = ({children}) => {
  const {ethereum} = window;

  const [userInvestments, setUserInvestments] = useState([]);
  console.log(
    '🚀 ~ file: ContractContextProvider.js ~ line 15 ~ ContractContextProvider ~ userInvestments',
    userInvestments,
  );
  const [dataIsReturned, setDataIsReturned] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');
  console.log(
    '🚀 ~ file: ContractContextProvider.js ~ line 14 ~ ContractContextProvider ~ currentAccount',
    currentAccount,
  );
  const [totalSupply, setTotalSupply] = useState();
  console.log(
    '🚀 ~ file: ContractContextProvider.js ~ line 15 ~ ContractContextProvider ~ totalSupply',
    totalSupply,
  );
  const [minInvestment, setMinInvestment] = useState();
  console.log(
    '🚀 ~ file: ContractContextProvider.js ~ line 17 ~ ContractContextProvider ~ minInvestment',
    minInvestment,
  );
  const [maxInvestment, setMaxInvestment] = useState();
  console.log(
    '🚀 ~ file: ContractContextProvider.js ~ line 19 ~ ContractContextProvider ~ maxInvestment',
    maxInvestment,
  );
  const [saleStart, setSaleStart] = useState();
  const [saleEnd, setSaleEnd] = useState();
  const [currentState, setCurrentState] = useState();

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

  const invest = async (investmentAmount) => {
    try {
      if (ethereum) {
        // const parsedAmount = ethers.utils.parseEther(investmentAmount);
        const parsedAmount = ethers.utils.parseUnits(investmentAmount, 'ether');

        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: currentAccount,
              to: contractAddress,
              value: parsedAmount._hex,
            },
          ],
        });

        await addDoc(collection(db, 'investors'), {
          contractAddress: currentAccount,
          investmentAmount,
          date: Date.now(),
        });

        toast.success('Thank you for your investment', {
          containerId: 'B',
          transition: Slide,
        });
      } else {
        console.log('No ethereum object');
      }
    } catch (error) {
      toast.error('An error occurred, please try again later.', {
        containerId: 'B',
        transition: Slide,
      });
      console.log(error);

      throw new Error('No ethereum object');
    }
  };

  const getInvestors = async () => {
    const investorsData = await getDocs(collection(db, 'investor'));

    setUserInvestments(
      investorsData.docs.map((doc) => ({
        ...doc.data(),
      })),
    );
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    getICODetails();
    getInvestors();
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
        invest,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContextProvider;

ContractContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
