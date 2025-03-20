import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-black text-white text-center">
            <div className="max-w-4xl mx-auto">
                <p className="text-sm mb-4">© 2025 사색의향기. All rights reserved.</p>
                <form className="flex justify-center">
                    <input type="email" className="p-2 w-64 rounded-l" placeholder="이메일 주소를 입력하세요" />
                    <button className="bg-blue-600 text-white p-2 rounded-r">구독하기</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
