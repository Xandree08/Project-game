import React, { useEffect, useRef } from "react";

/* global createUnityInstance */

const UnityGame = () => {
    const canvasRef = useRef(null);
    const unityContainerRef = useRef(null);
    const loadingBarRef = useRef(null);
    const progressBarFullRef = useRef(null);
    const fullscreenButtonRef = useRef(null);
    const warningBannerRef = useRef(null);

    useEffect(() => {
        const unityShowBanner = (msg, type) => {
            const updateBannerVisibility = () => {
                warningBannerRef.current.style.display =
                    warningBannerRef.current.children.length ? "block" : "none";
            };
            const div = document.createElement("div");
            div.innerHTML = msg;
            warningBannerRef.current.appendChild(div);
            if (type === "error") div.style = "background: red; padding: 10px;";
            else {
                if (type === "warning") div.style = "background: yellow; padding: 10px;";
                setTimeout(() => {
                    warningBannerRef.current.removeChild(div);
                    updateBannerVisibility();
                }, 5000);
            }
            updateBannerVisibility();
        };

        const buildUrl = "unity/Build";
        const loaderUrl = `${buildUrl}/A3_Build.loader.js`;
        const config = {
            dataUrl: `${buildUrl}/A3_Build.data`,
            frameworkUrl: `${buildUrl}/A3_Build.framework.js`,
            codeUrl: `${buildUrl}/A3_Build.wasm`,
            streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "A3",
            productVersion: "0.1",
            showBanner: unityShowBanner,
        };

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            // Mobile adjustments
            const meta = document.createElement("meta");
            meta.name = "viewport";
            meta.content =
                "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
            document.getElementsByTagName("head")[0].appendChild(meta);
            unityContainerRef.current.className = "unity-mobile";
            canvasRef.current.className = "unity-mobile";
        } else {
            canvasRef.current.style.width = "95vw";
            canvasRef.current.style.height = "85vh";
        }

        loadingBarRef.current.style.display = "absolute";

        const script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = () => {
            createUnityInstance(canvasRef.current, config, (progress) => {
                progressBarFullRef.current.style.width = 100 * progress + "%";
            })
                .then((unityInstance) => {
                    loadingBarRef.current.style.display = "none";
                    fullscreenButtonRef.current.onclick = () => {
                        unityInstance.SetFullscreen(1);
                    };
                })
                .catch((message) => {
                    alert(message);
                });
        };
        document.body.appendChild(script);

        return () => {
            // Cleanup script
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            id="unity-container"
            ref={unityContainerRef}
            className="unity-desktop"
            style={{width:"100%" , height: "90vh"}}
        >
            <canvas
                id="unity-canvas"
                ref={canvasRef}
                style={{
                        display: "flex",
                        margin: "0 auto",
                        width: "100%",
                    }}
            ></canvas>
            <div id="unity-loading-bar" ref={loadingBarRef} style={{ display: "none" }}>
                <div id="unity-logo"></div>
                <div id="unity-progress-bar-empty">
                    <div id="unity-progress-bar-full" ref={progressBarFullRef}></div>
                </div>
            </div>
            <div id="unity-warning" ref={warningBannerRef}></div>
            <div id="unity-footer">
                <div id="unity-webgl-logo"></div>
                <div
                    id="unity-fullscreen-button"
                    ref={fullscreenButtonRef}
                    style={{ cursor: "pointer" }}
                ></div>
            </div>
        </div>
    );
};

export default UnityGame;
