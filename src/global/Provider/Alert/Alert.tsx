import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react'
import * as S from './Alert.styled'
import theme from '@/styles/theme/theme'

type AlertProps = {
    type: 'success' | 'error'
    message: string
}

type AlertContextType = {
    showAlert: (type: 'success' | 'error', message: string) => void
    hideAlert: () => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const useAlert = () => {
    const context = useContext(AlertContext)
    if (!context) {
        throw new Error('useAlert must be used within a AlertProvider')
    }
    return context
}

type AlertProviderProps = {
    children: ReactNode
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
    const [alertInfo, setAlertInfo] = useState<AlertProps | null>(null)
    const showAlert = (type: 'success' | 'error', message: string) => {
        setAlertInfo({ type, message })
    }

    const hideAlert = () => {
        setAlertInfo(null)
    }

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null
        if (alertInfo) {
            timer = setTimeout(() => {
                hideAlert()
            }, 3000)
        }

        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [alertInfo])

    return (
        <AlertContext.Provider value={{ showAlert, hideAlert }}>
            {children}
            {alertInfo && (
                <S.AlertContainer
                    backgroundColor={
                        alertInfo.type === 'success'
                            ? theme.colors.sucess
                            : theme.colors.error
                    }
                >
                    {alertInfo.type === 'success' ? (
                        <S.CheckItem />
                    ) : (
                        <S.CheckItemError />
                    )}
                    <p>{alertInfo.message}</p>
                </S.AlertContainer>
            )}
        </AlertContext.Provider>
    )
}

export default AlertProvider
