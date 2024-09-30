"use client";

import React, { useState } from "react";
import styles from "../../styles/components/account/accountCreationContainer.module.css";
import PageButton from "@/components/page/pageButton";
import { useRouter } from "next/navigation";

const AccountCreationContainer = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(0);

    const selectOptionNext = () => {
        setSelectedOption((selectedOption + 1) % 6);
    };

    const selectOptionBack = () => {
        setSelectedOption((selectedOption - 1 + 6) % 6);
    };

    const saveAndExit = () => {
        // TODO: Add the save to DB logic here
        router.push("/product-overview");
    };

    const handleSelectOption = (index : number) => {
        setSelectedOption(index);
    };

    return (
        <div className={styles.accountCreationContainer}>
            <div className={styles.accountCreationLeftside}>
                <div
                    className={styles.accountCreationCategoryBox1}
                    onClick={() => handleSelectOption(0)}
                    role="navigation"
                >
                    {selectedOption === 0 && <div className={styles.decorativeCircle1}></div>}
                    <div className={styles.accountCreationCategoryBoxText}>ACCOUNT</div>
                </div>
                <div
                    className={styles.accountCreationCategoryBox2}
                    onClick={() => handleSelectOption(1)}
                    role="navigation"
                >
                    {selectedOption === 1 && <div className={styles.decorativeCircle2}></div>}
                    <div className={styles.accountCreationCategoryBoxText}>COMPANY</div>
                </div>
                <div
                    className={styles.accountCreationCategoryBox3}
                    onClick={() => handleSelectOption(2)}
                    role="navigation"
                >
                    {selectedOption === 2 && <div className={styles.decorativeCircle1}></div>}
                    <div className={styles.accountCreationCategoryBoxText}>MARKET</div>
                </div>
                <div
                    className={styles.accountCreationCategoryBox4}
                    onClick={() => handleSelectOption(3)}
                    role="navigation"
                >
                    {selectedOption === 3 && <div className={styles.decorativeCircle2}></div>}
                    <div className={styles.accountCreationCategoryBoxText}>PRODUCTS</div>
                </div>
                <div
                    className={styles.accountCreationCategoryBox5}
                    onClick={() => handleSelectOption(4)}
                    role="navigation"
                >
                    {selectedOption === 4 && <div className={styles.decorativeCircle1}></div>}
                    <div className={styles.accountCreationCategoryBoxText}>SETTINGS</div>
                </div>
                <div
                    className={styles.accountCreationCategoryBox6}
                    onClick={() => handleSelectOption(5)}
                    role="navigation"
                >
                    {selectedOption === 5 && <div className={styles.decorativeCircle2}></div>}
                    <div className={styles.accountCreationCategoryBoxText}>NOTIFICATIONS</div>
                </div>
                <div className={styles.accountCreationCategoryButtons}>
                    <PageButton label={"BACK"} onClick={selectOptionBack} />
                    <PageButton label={"EXIT"} onClick={saveAndExit} />
                    <PageButton label={"NEXT"} onClick={selectOptionNext} />
                </div>
            </div>
            <div className={styles.accountCreationRightside}>
                { selectedOption === 0 && "1"}
                { selectedOption === 1 && "2"}
                { selectedOption === 2 && "3"}
                { selectedOption === 3 && "4"}
                { selectedOption === 4 && "5"}
                { selectedOption === 5 && "6"}
            </div>
        </div>
    );
};

export default AccountCreationContainer;
