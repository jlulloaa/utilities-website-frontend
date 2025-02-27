import { Tooltip as ReactTooltip } from "react-tooltip";
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

// Language setting taken from https://codeutility.org/javascript-how-can-i-convert-google-translate-dropdown-into-language-button-i-am-using-google_translate_element-in-react-js-stack-overflow/ 
export const LanguageChange = () => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en', 
                                                     includedLanguages: 'es,it,fr',  
                                                     layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, 
                                                    }, 
                                                    'google_translate_element')
    }
    useEffect(() => {
      var addScript = document.createElement('script');
      addScript.setAttribute('async', '');
      addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, [])

    return (
      <div id="google_translate_element"></div>
    );
  };


export const formatMoney = (value) => {
    if (value >0) {
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    } else {
        return "--";
    }
}

export const formatDate = (dateStr) => {
  const datevalue = new Date(Date.parse(dateStr));
  return {date: datevalue.toLocaleDateString(), time: datevalue.toLocaleTimeString()};

}

export const formatDateForBackend = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
};


export const ToolTips = () => {

    const tooltipFormat = {
        place: "bottom",
        type: "dark",
        effect: "float",
        multiline: true,
        offset: {'top': 1, 'left': 1},
        border: false,
        backgroundColor: "gray",
        textColor: "white",
        delayHide: 10
    };

    const idTip = {
        homeTip: "Go to Home page", 
        createAccTip: <>Add a new <br/> account</>,
        startTip: "Click en la imagen para comenzar",
        streamTip: "Click en la imagen para iniciar video",
        existAccTip: <>Access your <br/> account</>,
        logoutTip: <>Click to Logout</>,
        newAccTip: "Click to add account",
        depositTip: <>Add funds <br/> to your account</>,
        depositClickTip: "Click to deposit",
        depositAmountTip: "Enter amount",
        withdrawTip: <>Draw funds out <br/> from your account</>,
        withdrawClickTip: "Click to withdraw",
        withdrawAmountTip: "Enter amount", 
        transferTip: <>Transfer funds <br/> to other accounts</>,
        transferClickTip: "Click to transfer",
        transferAmountTip: "Enter amount",
        aboutTip: "The small print",
        allDataTip: <>Historic <br/> transactions</>,
        noAccountTip: <>Must have an account <br/> to enable this option</>, 
        exportEnabledTip: "Click to download", 
        balanceTip: <>Check your <br/> current balance</>,
        productsTip: "Check our products",
        ODMtooltip: "Object Data Modelling"
    }

    let toolTipFlags = Object.entries(idTip).map((item, idx) => {
                return (
                  <ReactTooltip key={idx} id={item[0]} {...tooltipFormat} >
                    {item[1]}
                  </ReactTooltip>
                  );
              });
          
    return (
        <>
            {toolTipFlags}
        </>
    )
};


export const LoadingPage = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export const Header = () => {
  return (
    <Link data-tip data-for="homeTip" to="/" className="btn btn-outline-success" > 
      <img src="./bank_icon.png" className="img-fluid" alt="Responsive Site"/>
      <span>BadBank</span> 
      <img src="./bank_icon.png" className="img-fluid" alt="Responsive Site"/>
    </Link>
   )
}

export const Tagline = () => {
  return (
    <>A friendly bank with an excellent website and reliable services</>
  )
}

export const InitImage = (urlStr) => {
  const image = new Image();
  // image.src = "idleConn.png"; 
  image.src = urlStr;
  return image;
}
